const Home = () => {

  const handleClick = (e) => {
    console.log("Hello, Ninjas!",e);
  }

  const handleClickAgain = (name,e) =>{
    console.log("Hello " + name, e.target);
  }

  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick} >Click me</button>
      <button onClick={(e) => handleClickAgain("Anurodh",e)} >Click Me Again</button>
    </div>
  );
}
 
export default Home;