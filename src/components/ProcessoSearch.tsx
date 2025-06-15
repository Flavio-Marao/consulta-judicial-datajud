
import * as React from "react";
import Loader from "./Loader";
import ProcessoResultado from "./ProcessoResultado";
import { toast } from "@/hooks/use-toast";

type ProcessoData = {
  numero_processo: string;
  classe: string;
  assunto: string;
  orgao_julgador: string;
  movimentacoes: { data: string; descricao: string }[];
};

export default function ProcessoSearch() {
  const [numero, setNumero] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState<string | null>(null);
  const [resultado, setResultado] = React.useState<ProcessoData | null>(null);

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
      const resp = await fetch("https://SEU_DOMINIO_N8N/webhook/datajud", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ numero_processo: numero.trim() }),
      });

      if (!resp.ok) {
        throw new Error("Processo não encontrado ou erro na consulta.");
      }

      const data = await resp.json();

      if (!data || !data.numero_processo) {
        throw new Error("Processo não localizado.");
      }

      setResultado({
        numero_processo: data.numero_processo,
        classe: data.classe,
        assunto: data.assunto,
        orgao_julgador: data.orgao_julgador,
        movimentacoes: Array.isArray(data.movimentacoes)
          ? data.movimentacoes
          : [],
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
          className="bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-md hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
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
