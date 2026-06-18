import Button from "./Button";

import yaguareteTexture from "../assets/textures/yaguarete.jpg";
import tecnologiaTexture from "../assets/textures/tecnologia.jpg";

export default function Buttons() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">

      <Button
        href="/yaguaretes"
        backgroundImage={yaguareteTexture}
      >
        Yaguaretes Softbol Posadas
      </Button>

      <Button
        href="/ciencia-tecnologia"
        backgroundImage={tecnologiaTexture}
      >
        Ciencia, Tecnología e Innovación
      </Button>

    </div>
  );
}