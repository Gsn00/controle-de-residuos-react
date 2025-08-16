import Button from "../Button/Button";
import Input from "../Input/Input";
import Section from "../Section/Section";
import Select from "../Select/Select";
import { useState } from "react";

function Adicionar(props) {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <Section>
      <h1 className="font-bold text-lg">Adicionar Item</h1>

      <Input
        title="Nome"
        type="text"
        placeholder="Digite o nome do item..."
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <Input
        title="Peso ( g )"
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
          if (props.adicionarItem(nome, peso, categoria)) {
            setNome("");
            setPeso("");
            setCategoria("");
          }
        }}
      >
        Adicionar
      </Button>
    </Section>
  );
}

export default Adicionar;
