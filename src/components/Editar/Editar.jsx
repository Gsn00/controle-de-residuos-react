import Button from "../Button/Button";
import Input from "../Input/Input";
import Section from "../Section/Section";
import Select from "../Select/Select";
import { useState } from "react";
import { useNavigate } from "react-router";

function Editar(props) {
  const itemOriginal = props.itemOriginal;
  const navigate = useNavigate();

  const [nome, setNome] = useState(itemOriginal.nome);
  const [peso, setPeso] = useState(itemOriginal.peso);
  const [categoria, setCategoria] = useState(itemOriginal.categoria);

  return (
    <Section>
      <h1 className="font-bold text-lg">Editar Item</h1>

      <Input
        title="Nome"
        type="text"
        placeholder="Digite o nome do item..."
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <Input
        title="Peso"
        type="number"
        placeholder="Digite o peso em gramas..."
        value={peso}
        onChange={(event) => setPeso(event.target.value)}
      />
      <Select
        title="Categoria"
        value={categoria}
        onChange={(event) => setCategoria(event.target.value)}
      >
        <option value="" className="hidden">
          Selecione uma categoria
        </option>
        {props.categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </Select>
      <Button
        onClick={() => {
          if (!nome.trim() || !peso || peso <= 0 || !categoria.trim()) {
            alert("Por favor, preencha os dados corretamente.");
            return false;
          }

          const itemEditado = {
            key: itemOriginal.key,
            nome,
            peso,
            categoria,
          };

          navigate("/", { state: { itemEditado } });
        }}
      >
        Salvar
      </Button>
    </Section>
  );
}

export default Editar;
