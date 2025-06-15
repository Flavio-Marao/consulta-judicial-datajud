
import Header from "@/components/Header";
import ProcessoSearch from "@/components/ProcessoSearch";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <div className="flex-1 px-2 py-12">
      <div className="w-full max-w-4xl mx-auto mt-8">
        <header className="mb-10 text-center">
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2"
            style={{ color: "#12306b" }}
          >
            Consulta de Processos Judiciais
          </h1>
          <p className="text-lg text-muted-foreground font-medium">
            Sistema de consulta pública aos processos judiciais do Tribunal de Justiça do Maranhão
          </p>
        </header>
        <ProcessoSearch />
      </div>
    </div>
    <Footer />
  </div>
);

export default Index;
