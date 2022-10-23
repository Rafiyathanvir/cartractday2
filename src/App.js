import logo from './logo.svg';
import './compends/popup.css';
import { useState } from 'react';
import Popup from './Popup';
//import Popup from './Popup';

function App() {

  const[Button,popupbutton]=useState(false);

  

  return (<div className='App'>
      <main>
        <h1>welcome</h1>
      <button  onClick={()=>popupbutton(true)}> click me</button>
   
</main>
<Popup trigger={Button} setTrigger={popupbutton}>
<h1>hi</h1>
</Popup>
      </div>
   
  );
}

export default App;
