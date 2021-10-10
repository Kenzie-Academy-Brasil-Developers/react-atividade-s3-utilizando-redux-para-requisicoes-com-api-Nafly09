import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonThunk from "../../store/modules/thunks";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(addDigimonThunk(input, setError));
    setInput("");
  };

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Insira o nome do seu digimon"
        />
        <div>{error && <span>Digimon não encontrado</span>}</div>
        <button disabled={!input} onClick={handleSearch}>
          Pesquisar
        </button>
      </div>
    </div>
  );
};

export default Search;
