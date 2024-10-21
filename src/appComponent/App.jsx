import React, { useState } from "react";
import "./style.scss";
const App = () => {
  const [sales, setSales] = useState(0);

  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
      ativo: true,
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
      ativo: false,
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
      ativo: true,
    },
  ];

  const product = produtos;

  const cp = product.filter(
    (item) => Number(item.preco.replace("R$ ", "")) > 1500
  );

  const SalesIndex = (id) => {
    setSales((prevSales) => ({
      ...prevSales,
      [id]: (prevSales[id] || 0) + 1,
    }));
  };

  return (
    <section className="app-section">
      {cp.map((item) => (
        <div key={item.id}>
          {item.ativo && (
            <div className="app-section__div">
              <h1>{item.nome}</h1>
              <h2>Preço: {item.preco}</h2>
              <h2>
                {item.cores.map((cor) => (
                  <li
                    key={cor}
                    className="app-section__div--cores"
                    style={{
                      backgroundColor: cor,
                    }}
                  >
                    {cor}
                  </li>
                ))}
              </h2>
              Comprado: {sales[item.id] || 0}
              <button className="button" onClick={() => SalesIndex(item.id)}>
                Comprar
              </button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default App;
