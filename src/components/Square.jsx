/* eslint-disable react/prop-types */
export default function Square(props) {
  function handleOnClick() {
    alert(`Clicked: ${props.variant}`);
    location.reload();
  }

  function handleOnClickLink() {
    location.reload();
  }

  return (
    <>
      <div className="square-box">
        <h1>Netflix</h1>
        <p>
          The purpose of this A/B test is to understand, based on two different
          content types and Calls to Action (CTAs), what would more effectively
          attract a user to the Netflix platform.
        </p>
        <button onClick={handleOnClick}>{props.textButton}</button>
        <a onClick={handleOnClickLink}> I am not interested</a>
      </div>
    </>
  );
}
