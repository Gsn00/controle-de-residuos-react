import Section from "../Section/Section";
import { Trash2, Pencil } from "lucide-react";
import { Link } from "react-router";

function Categoria(props) {
  const pesoTotal = props.itens.reduce((sum, current) => sum + current.peso, 0);

  return (
    <Section>
      <h1 className="w-full text-lg font-bold text-center">
        {props.categoria}
      </h1>
      <br />

      <div className="rounded-md shadow px-4 max-sm:py-4 py-2 w-full bg-gray-50">
        <table className="w-full max-sm:hidden">
          <thead className="text-left">
            <tr>
              <th>Nome</th>
              <th>Peso ( g )</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {props.itens.map((item) => (
              <tr key={item.key}>
                <td className="py-1">{item.nome}</td>
                <td>{item.peso}</td>
                <td className="flex justify-evenly">
                  <Trash2
                    onClick={() => props.removerItem(item.key)}
                    className="cursor-pointer"
                  />
                  <Link to={{ pathname: "/editar" }} state={item}>
                    <Pencil onClick={() => {}} className="cursor-pointer" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sm:hidden flex flex-col gap-4">
          {props.itens.map((item) => (
            <div
              key={item.key}
              className="flex flex-col gap-1 text-md rounded-md p-4 shadow"
            >
              <div className="flex justify-between">
                <span className="font-bold">Nome:</span>
                <span>{item.nome}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Peso:</span>
                <span>{item.peso}</span>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => props.removerItem(item.key)}
                  className="cursor-pointer"
                >
                  <Trash2 />
                </button>
                <button className="cursor-pointer">
                  <Link
                    to={{
                      pathname: "/editar",
                    }}
                    state={item}
                  >
                    <Pencil />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <h1 className="text-lg font-bold">Peso total: {pesoTotal}g</h1>
    </Section>
  );
}

export default Categoria;
