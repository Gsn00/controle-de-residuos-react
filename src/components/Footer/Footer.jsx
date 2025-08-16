import Button from "../Button/Button";
import Section from "../Section/Section";

function Footer(props) {
  const pesoTotal = props.itens.reduce((sum, current) => sum + current.peso, 0);

  return (
    <Section>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Peso total: {pesoTotal}g</h1>
        <Button onClick={() => props.removerTodos()} className="bg-red-400">
          Limpar Listas
        </Button>
      </div>
    </Section>
  );
}

export default Footer;
