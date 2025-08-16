import "./App.css";
import Adicionar from "./components/Adicionar/Adicionar";
import Categoria from "./components/Categoria/Categoria";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

function App({ categorias }) {
  const [itens, setItens] = useState(
    JSON.parse(localStorage.getItem("itens")) || []
  );

  useEffect(() => {
    localStorage.setItem("itens", JSON.stringify(itens));
  }, [itens]);

  const location = useLocation();

  useEffect(() => {
    const itemEditado = location.state?.itemEditado;
    editarItem(itemEditado);
  }, [location.state]);

  function adicionarItem(nome, peso, categoria) {
    if (!nome.trim() || !peso.trim() || !categoria.trim()) {
      alert("Digite os dados corretamente.");
      return false;
    }

    peso = parseFloat(peso);

    const item = {
      key: uuidv4(),
      nome,
      peso,
      categoria,
    };
    setItens([...itens, item]);
    return true;
  }

  function removerItem(key) {
    const newItens = itens.filter((item) => item.key != key);
    setItens(newItens);
  }

  function removerTodos() {
    if (confirm("Tem certeza que deseja apagar todos os itens?")) {
      setItens([]);
    }
  }

  function editarItem(editado) {
    if (!editado) return false;

    editado.peso = parseFloat(editado.peso);

    const newItens = itens.map((item) => {
      if (item.key == editado.key) {
        return {
          ...item,
          nome: editado.nome,
          peso: editado.peso,
          categoria: editado.categoria,
        };
      }
      return item;
    });

    setItens(newItens);
  }

  return (
    <div className="flex justify-center min-w-full min-h-full bg-blue-100 p-4">
      <div className="w-full max-w-[900px] p-4 space-y-2">
        <Header />
        <Adicionar adicionarItem={adicionarItem} categorias={categorias} />
        {categorias.map((categoria) => (
          <Categoria
            removerItem={removerItem}
            itens={itens.filter((item) => item.categoria == categoria)}
            key={categoria}
            categoria={categoria}
          />
        ))}
        <Footer removerTodos={removerTodos} itens={itens} />
      </div>
    </div>
  );
}

export default App;
