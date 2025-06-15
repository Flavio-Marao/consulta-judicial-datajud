
import { ProcessoDataFrontend } from "./ProcessoSearch";

const ProcessoResultado = ({ data }: { data: ProcessoDataFrontend }) => (
  <div className="mt-8 w-full max-w-3xl mx-auto">
    <div className="bg-card rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-3 text-primary">
        Informações do Processo
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
        <div>
          <div className="text-muted-foreground text-sm mb-1">
            Número do Processo
          </div>
          <div className="font-semibold text-lg">{data.numeroProcesso}</div>
        </div>
        <div>
          <div className="text-muted-foreground text-sm mb-1">Classe</div>
          <div className="font-semibold">{data.classe}</div>
        </div>
        <div>
          <div className="text-muted-foreground text-sm mb-1">Assuntos</div>
          <div className="font-semibold">
            {data.assuntos?.length
              ? data.assuntos.join(", ")
              : "Sem assuntos informados"}
          </div>
        </div>
        <div>
          <div className="text-muted-foreground text-sm mb-1">Órgão Julgador / Vara</div>
          <div className="font-semibold">{data.orgaoJulgador}</div>
        </div>
        <div>
          <div className="text-muted-foreground text-sm mb-1">
            Data da Última Atualização
          </div>
          <div className="font-semibold">
            {data.dataUltimaAtualizacao || "-"}
          </div>
        </div>
        <div>
          <div className="text-muted-foreground text-sm mb-1">
            Data do Ajuizamento
          </div>
          <div className="font-semibold">
            {data.dataAjuizamento || "-"}
          </div>
        </div>
        {data.gabinete ? (
          <div>
            <div className="text-muted-foreground text-sm mb-1">
              Gabinete
            </div>
            <div className="font-semibold">{data.gabinete}</div>
          </div>
        ) : null}
      </div>
    </div>
    <div className="bg-card rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-primary">
        Movimentações
      </h3>
      <ul className="divide-y divide-border">
        {data.movimentacoes && data.movimentacoes.length > 0 ? (
          data.movimentacoes.map((mov, idx) => (
            <li
              key={idx}
              className="py-2 flex flex-col sm:flex-row sm:items-center gap-1"
            >
              <span className="font-medium text-sm text-muted-foreground w-40 min-w-max">
                {mov.data}
              </span>
              <span className="flex-1 text-base">{mov.descricao}</span>
            </li>
          ))
        ) : (
          <li className="py-2 text-muted-foreground">
            Sem movimentações encontradas.
          </li>
        )}
      </ul>
    </div>
  </div>
);

export default ProcessoResultado;
