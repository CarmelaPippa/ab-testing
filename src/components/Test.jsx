/* eslint-disable react/prop-types */
import Square from "./Square";

export default function Test(props) {
  return (
    <main>
      <div className="main__box">
        <Square textButton={props.textButton} variant={props.variant}></Square>
      </div>
      <img src={props.imageSrc} alt={props.imageAlt} />
    </main>
  );
}
