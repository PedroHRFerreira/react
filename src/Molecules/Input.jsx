import { useState } from "react";
import AtomsInput from "../Atoms/input.jsx";
import "./style.scss";

const MoleculesInput = () => {
  const [name, setName] = useState("Pedro Henrique");
  const [newName, setNewName] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleButton = () => {
    if (!newName.trim()) {
      setInputError(true);
    } else {
      setName(newName);
      setNewName("");
      setInputError(false);
    }
  };

  return (
    <>
      <h1>{name}</h1>
      <section className="input">
        <AtomsInput
          type="text"
          errors={inputError}
          value={newName}
          onClick={(e) => {
            setNewName(e.target.value);
            setInputError(false);
          }}
        />
        {inputError && (
          <p className="input--error">Não pode enviar campo vazio</p>
        )}

        <div className="input--buttons">
          <button onClick={handleButton}>Mudar nome</button>
          <button
            onClick={() => {
              setName("Pedro Henrique");
              setNewName("");
            }}
          >
            Voltar para o nome original
          </button>
        </div>
      </section>
    </>
  );
};

export default MoleculesInput;
