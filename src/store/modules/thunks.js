import axios from "axios";

import { addDigimon } from "./actions";

const addDigimonThunk = (digimon, setError) => (dispatch) => {
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((res) => dispatch(addDigimon(res.data[0])))
    .catch((_) => {
      setError(true);
    });
};

export default addDigimonThunk;
