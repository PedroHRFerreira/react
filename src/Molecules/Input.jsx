import { useState } from "react";
import "./style.scss";

const App = () => {
  const [name, setName] = useState("Pedro Henrique");
  const [newName, setNewName] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleButton = () => {
    if (!newName.trim()) {
      setInputError(true);
    } else {
      console.log(newName);
      setName(newName);
      setNewName("");
      setInputError(false);
    }
  };

  return (
    <>
      <h1>{name}</h1>
      <div className="input">
        <input
          type="text"
          style={{ borderColor: inputError ? "red" : "black" }}
          placeholder="Enter your last name"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
            setInputError(false);
          }}
        />
        {inputError && (
          <p style={{ color: "red", position: "absolute", top: "118px" }}>
            Não pode enviar campo vazio
          </p>
        )}

        <div className="input__buttons">
          <button onClick={handleButton}>Mudar nome</button>
          <button onClick={() => setName("Pedro Henrique")}>
            Voltar para o nome original
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
