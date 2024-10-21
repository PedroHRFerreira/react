import React from "react";
const livrosArray = () => {
  const livros = [
    { nome: "A Game of Thrones", ano: 1996, description: "Fantasia" },
    { nome: "A Clash of Kings", ano: 1998, description: "" },
    { nome: "A Storm of Swords", ano: 2000, description: "Fantasia" },
  ];
  return (
    <section>
      {livros
        .filter((livro) => livro.ano > 1995)
        .map((livro) => (
          <ul key={livro.nome}>
            <li>
              {livro.nome} <span>{livro.ano}</span>
            </li>
            <p style={{ color: "green" }}>{livro.description || "---"}</p>
          </ul>
        ))}
    </section>
  );
};

export default livrosArray;
