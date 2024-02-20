import { useEffect, useState } from "react";
import "./App.css";
import Test from "./components/Test";

function App() {
  const [variant, setVariant] = useState();

  useEffect(() => {
    if (Math.random() < 0.5) {
      setVariant(true);
    }
  }, []);

  return (
    <>
      {variant ? (
        <Test
          textButton={"Start free now"}
          imageSrc={"../src/assets/images/netflix-library.jpeg"}
          variant={"Test A"}
        />
      ) : (
        <Test
          textButton={"Only 30 kr/ month"}
          imageSrc={"../src/assets/images/irishman.jpeg"}
          variant={"Test B"}
        />
      )}
    </>
  );
}

export default App;
