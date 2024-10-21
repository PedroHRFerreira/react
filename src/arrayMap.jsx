import React from "react";
const ArrayMap = () => {
  const Mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
      { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
  };

  const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
    ],
    ativa: true,
  };

  const sales = Mario;
  const cp = sales.compras.filter(
    (item) => Number(item.preco.replace("R$ ", "")) > 1500
  );

  const cpRedunce = cp.reduce(
    (a, b) => a + Number(b.preco.replace("R$ ", "")),
    0
  );

  return (
    <>
      <h1>Cliente: {sales.cliente}</h1>
      <h1>Idade: {sales.idade}</h1>
      {cp.map((item) => (
        <div key={item.nome}>
          <span>{item.nome}: </span>
          <span>{item.preco}</span>
        </div>
      ))}
      <h1>Valor total das compras: {cpRedunce}</h1>
      <h3>
        Status:{" "}
        <span style={{ color: sales.ativa ? "green" : "red" }}>
          {sales.ativa ? "ativo" : "inativo"}
        </span>
      </h3>
      {cpRedunce > 6000 && (
        <p style={{ color: "red" }}>Valor da compra acima do limite.</p>
      )}
    </>
  );
};
export default ArrayMap;
