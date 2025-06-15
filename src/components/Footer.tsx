
import React from "react";
import { Scales } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#12306b] text-white py-8 mt-auto w-full">
      <div className="flex flex-col items-center space-y-3">
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <Scales className="w-7 h-7" strokeWidth={2.5} />
          <span className="font-bold">TJMA - Consulta Pública</span>
        </div>
        <div className="text-sm opacity-90 text-center">
          © 2024 Tribunal de Justiça do Maranhão. Todos os direitos reservados.
        </div>
        <div className="text-xs opacity-80 text-center">
          Sistema desenvolvido para consulta pública de processos judiciais
        </div>
      </div>
    </footer>
  );
}
