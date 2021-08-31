import { useState } from 'react';

const Home = () => {
  //let name = "mario";
  const [name, setName] = useState('mario');
  const [age,setAge] = useState(25)

  const handleClick = () => {
    setName('Anurodh');
    setAge(56);
  }

  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick} >Click me</button>
    </div>
  );
}
 
export default Home;