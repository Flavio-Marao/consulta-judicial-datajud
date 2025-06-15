
import { Scale } from "lucide-react";
import * as React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#12306b] text-white py-7 mt-10">
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Scale size={24} className="inline-block" />
          <span className="font-bold text-lg">TJMA - Consulta Pública</span>
        </div>
        <div className="text-sm">
          © 2024 Tribunal de Justiça do Maranhão. Todos os direitos reservados.
        </div>
        <div className="text-xs opacity-90 mt-1">
          Sistema desenvolvido para consulta pública de processos judiciais
        </div>
      </div>
    </footer>
  );
}
