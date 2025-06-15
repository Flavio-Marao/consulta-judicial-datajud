import * as React from "react";
import Loader from "./Loader";
import ProcessoResultado from "./ProcessoResultado";
import { toast } from "@/hooks/use-toast";
import { parsePTDate } from "@/lib/utils";

type Assunto = { codigo: number; nome: string };
type Movimento = {
  codigo: number;
  nome: string;
  dataHora: string;
  complementosTabelados?: { codigo: number; valor: number; nome: string; descricao: string }[];
};
export type ProcessoDataFrontend = {
  numeroProcesso: string;
  classe: string;
  assuntos: string[];
  orgaoJulgador: string;
  movimentacoes: { data: string; descricao: string }[];
  dataUltimaAtualizacao?: string;
  dataAjuizamento?: string;
  gabinete?: string;
};

export default function ProcessoSearch() {
  const [numero, setNumero] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState<string | null>(null);
  const [resultado, setResultado] = React.useState<ProcessoDataFrontend | null>(null);

  // Endpoint fixo
  const [apiUrl] = React.useState("https://webhooks.fmautomacao.com.br/webhook/datajud");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumero(e.target.value);
    setErro(null);
    setResultado(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    setResultado(null);

    if (!numero.trim()) {
      setErro("Informe o número do processo.");
      return;
    }

    setLoading(true);

    try {
      const resp = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ numero_processo: numero.trim() }),
      });

      if (!resp.ok) {
        throw new Error("Processo não encontrado ou erro na consulta.");
      }

      const arr = await resp.json();

      if (!arr || !Array.isArray(arr) || !arr[0]) {
        throw new Error("Processo não localizado.");
      }

      const d = arr[0];

      // Parse assuntos (array de objetos para array de string)
      const assuntos = Array.isArray(d.assunto)
        ? d.assunto.map((a: any) => a.nome)
        : [];

      // Movimentações
      const movimentacoes =
        Array.isArray(d.movimentacoes) && d.movimentacoes.length
          ? d.movimentacoes.map((mov: any) => ({
              data: mov.dataHora
                ? parsePTDate(mov.dataHora)
                : "",
              descricao: mov.nome,
            }))
          : [];

      // Data última atualização
      const dataUltimaAtualizacao = d.dataUltimaAtualizacao
        ? d.dataUltimaAtualizacao.replace(/\s/g, "")
        : "";

      // >>>>> Ajuste Data do Ajuizamento <<<<<
      // Tenta pegar os campos possíveis em d
      const rawDataAjuizamento = d.dataAjuizamento || d["Data do Ajuizamento"];
      const dtAjuizamento = rawDataAjuizamento
        ? parsePTDate(rawDataAjuizamento.toString().replace(/\s/g, ""))
        : "";

      // Gabinete pode ser campo no index 1 do array.
      const gabinete =
        arr.length > 1 && arr[1].orgaoJulgador
          ? arr[1].orgaoJulgador
          : undefined;

      setResultado({
        numeroProcesso: d.numroProcesso || "",
        classe: d.classe || "",
        assuntos,
        orgaoJulgador: d.orgaoJulgador || d.Vara || "",
        movimentacoes,
        dataUltimaAtualizacao,
        dataAjuizamento: dtAjuizamento,
        gabinete,
      });
    } catch (error: any) {
      let msg =
        typeof error === "string"
          ? error
          : error?.message || "Erro desconhecido ao consultar o processo.";
      setErro(msg);
      toast({
        title: "Erro",
        description: msg,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        className="bg-card shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 items-center"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="Digite o número do processo"
          className="flex-1 bg-background border border-input rounded-md px-4 py-2 text-lg outline-none focus:ring-2 focus:ring-primary transition"
          value={numero}
          onChange={handleInput}
          disabled={loading}
        />
        <button
          type="submit"
          className="font-semibold px-6 py-2 rounded-md hover:bg-[#102651] transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          style={{
            background: "#12306b",
            color: "#fff"
          }}
          disabled={loading}
        >
          Consultar
        </button>
      </form>

      {loading && <Loader />}

      {erro && (
        <div className="mt-7 max-w-2xl mx-auto">
          <div className="bg-destructive/10 border border-destructive text-destructive-foreground rounded-lg py-4 px-6 text-lg font-medium text-center">
            {erro}
          </div>
        </div>
      )}

      {resultado && !erro && !loading && (
        <ProcessoResultado data={resultado} />
      )}
    </div>
  );
}
