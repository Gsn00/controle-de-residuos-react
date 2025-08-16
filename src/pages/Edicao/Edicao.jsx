import Editar from "../../components/Editar/Editar";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router";

function Edicao({ categorias }) {
  const location = useLocation();
  const itemOriginal = location.state;

  return (
    <div className="flex justify-center min-w-full min-h-full bg-blue-100 p-4">
      <div className="w-full max-w-[900px] p-4 space-y-2">
        <Header />
        <Editar itemOriginal={itemOriginal} categorias={categorias} />
      </div>
    </div>
  );
}

export default Edicao;
