import styled from "styled-components";
import { TextField } from "@material-ui/core";
export const Container = styled.div`
  display: flex;
  min-width: 100vw;
  justify-content: center;
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: fit-content;
`;

export const StyledTextField = styled(TextField)`
  && {
    width: 20rem;
  }
`;
