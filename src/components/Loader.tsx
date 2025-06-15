
import { Loader as LoaderIcon } from "lucide-react";

const Loader = () => (
  <div className="flex justify-center items-center py-8">
    <LoaderIcon className="animate-spin text-primary" size={36} strokeWidth={2.2} />
    <span className="ml-3 text-lg font-medium text-primary">Consultando...</span>
  </div>
);

export default Loader;
