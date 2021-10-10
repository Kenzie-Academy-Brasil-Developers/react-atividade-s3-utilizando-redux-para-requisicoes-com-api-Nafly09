import { useSelector } from "react-redux";
import { Card, Container } from "./styles";

const Digimons = () => {
  const { digimon } = useSelector((store) => store);
  return (
    <div>
      <ul>
        <Container>
          {digimon.map((digimon, index) => {
            return (
              <Card key={index}>
                <li>{digimon.name}</li>
                <img src={`${digimon.img}`} alt="current digimon" />
                <li>{digimon.level}</li>
              </Card>
            );
          })}
        </Container>
      </ul>
    </div>
  );
};

export default Digimons;
