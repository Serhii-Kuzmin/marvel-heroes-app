import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";

import MarvelService from "./services/MarvelServices";

const marvelService = new MarvelService();
// marvelService.getAllCharacters().then((res) => console.log(res));

marvelService.getAllCharacters().then((res) =>
  res.data.results.forEach((item) => {
    console.log(item.name);
  })
);

// marvelService.getCharacter(1011052).then((res) => console.log(res));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
