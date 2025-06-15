
import ProcessoSearch from "@/components/ProcessoSearch";

const Index = () => (
  <div className="min-h-screen bg-background flex flex-col justify-center px-2 py-12">
    <div className="w-full max-w-4xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 text-primary">
          Consulta de Processos Judiciais
        </h1>
        <p className="text-lg text-muted-foreground font-medium">
          Informe o número do processo judicial para consultar detalhes e movimentações.
        </p>
      </header>
      <ProcessoSearch />
    </div>
  </div>
);

export default Index;
