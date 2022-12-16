import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { PokemanData } from './myHooks/pokemanHook';
import { ChildPokeMen } from './components/ChildPokeMen';
import { PokeMenList } from './components/PokemenList';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Carousel from './components/Carousel'
function App() {

  const [childelement, setchildelement] = useState('');

  async function childget(event) {
    const childResponse = await fetch(event.target.id);
    const  childData= await childResponse.json();
    setchildelement(childData);
  }

  const myData = PokemanData();
  return (
    
    <div className="App">
      <div className='pokemen-list'>
      {myData.map((element, i) => {
        return <h3 className='list-pokemen' id={element.url} onClick={childget} key={i}>{element.name}</h3>
      })}
</div>
<div className='pokemen-card'>
  { childelement != '' ? <ChildPokeMen childelement= {childelement}  /> : ''}

{/* {childelement != '' ?  <div> <h1>{ childelement.name}</h1> <img src={childelement.sprites.back_default} /> </div> : ''} */}
</div>

    </div>


  );
}

export default App;
