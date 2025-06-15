
import { Shield } from "lucide-react";
import * as React from "react";

export default function Header() {
  return (
    <header className="w-full bg-[#12306b] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-6 py-4">
        {/* Esquerda: Ícone e Texto */}
        <div className="flex flex-row items-center gap-4">
          {/* Ícone da balança estilizado tipo tribunal */}
          <svg width="40" height="40" viewBox="0 0 40 40" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              {/* Haste central */}
              <rect x="18" y="9" width="4" height="18" rx="2" fill="white"/>
              {/* Base */}
              <rect x="13" y="27" width="14" height="4" rx="2" fill="white"/>
              {/* Triângulos (bandejas da balança) */}
              <polygon points="8,24 13,24 10.5,17" fill="white"/>
              <polygon points="32,24 27,24 29.5,17" fill="white"/>
              {/* Hastes das bandejas */}
              <rect x="10.2" y="12" width="1.5" height="6" rx="0.75" fill="white" transform="rotate(-18 10.2 12)"/>
              <rect x="28.3" y="12" width="1.5" height="6" rx="0.75" fill="white" transform="rotate(18 28.3 12)"/>
              {/* Haste superior */}
              <rect x="10" y="9" width="20" height="2.2" rx="1" fill="white"/>
            </g>
          </svg>
          <div>
            <div className="font-extrabold text-xl leading-tight tracking-tight">TJMA</div>
            <div className="text-sm font-normal tracking-wide opacity-90 -mt-0.5">Tribunal de Justiça do Maranhão</div>
          </div>
        </div>
        {/* Direita: links e info */}
        <div className="flex flex-row items-center gap-7">
          <div className="flex flex-row items-center gap-2 text-base font-medium">
            <Shield className="w-5 h-5 text-white" strokeWidth={2.2} />
            <span className="hidden sm:inline">Consulta Pública</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold tracking-wide">DATAJUD</span>
            <span className="text-xs font-normal opacity-90">Sistema Nacional</span>
          </div>
        </div>
      </div>
    </header>
  );
}
