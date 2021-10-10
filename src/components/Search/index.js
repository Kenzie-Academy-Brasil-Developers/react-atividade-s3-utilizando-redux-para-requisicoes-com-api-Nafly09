import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { SearchContainer, StyledTextField, Container } from "./styles";
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
    <>
      <h2>Procure pelo seu Digimon!</h2>
      <Container>
        <SearchContainer>
          <StyledTextField
            variant="outlined"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Insira o nome do seu digimon"
          />
          <div>{error && <span>Digimon não encontrado</span>}</div>
          <Button variant="contained" disabled={!input} onClick={handleSearch}>
            Pesquisar
          </Button>
        </SearchContainer>
      </Container>
    </>
  );
};

export default Search;
