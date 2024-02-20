import { useEffect, useState } from "react";
import "./App.css";
import Test from "./components/Test";

function App() {
  const [variant, setVariant] = useState(true);

  useEffect(() => {
    if (Math.random() < 0.5) {
      setVariant(false);
    }
  }, []);

  const textButton = variant ? "Only 30 kr/ month" : "Start free now";
  const imageSrc = variant
    ? "/src/assets/images/netflix-library.jpeg"
    : "/src/assets/images/irishman.jpeg";
  const imageAlt = variant ? "Netflix library" : "The Irishman";
  const variantTest = variant ? "Test A" : "Test B";

  return (
    <Test
      textButton={textButton}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      variant={variantTest}
    />
  );
}

export default App;
