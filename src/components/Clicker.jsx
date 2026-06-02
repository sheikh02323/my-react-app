function Clicker() {
  const handleClick = () => {
    alert("You click the button!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default Clicker;
