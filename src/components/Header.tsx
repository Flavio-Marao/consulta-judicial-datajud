
import { Scale, Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#142e64] py-4 px-4 flex items-center justify-between">
      {/* Esquerda: TJMA */}
      <div className="flex items-center gap-3">
        <Scale size={36} color="white" strokeWidth={2.1} />
        <div>
          <div className="text-white text-xl sm:text-2xl font-bold leading-none">
            TJMA
          </div>
          <div className="text-white text-xs sm:text-sm leading-none opacity-90">
            Tribunal de Justiça do Maranhão
          </div>
        </div>
      </div>
      {/* Direita: Consulta Pública & DATAJUD */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-1.5">
          <Shield size={18} color="white" strokeWidth={1.8} />
          <span className="text-white text-base font-medium">Consulta Pública</span>
        </div>
        <div className="flex flex-col items-end ml-2">
          <span className="text-white text-base sm:text-lg font-extrabold leading-none">
            DATAJUD
          </span>
          <span className="text-white text-xs opacity-90 leading-none">
            Sistema Nacional
          </span>
        </div>
      </div>
    </header>
  );
}
