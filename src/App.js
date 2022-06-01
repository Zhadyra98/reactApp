import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>First react app</h2>
}

// const Field1 = () => {

  // const holder = 'Enter here';
  // const styledField = {
  //   width: '300px'
  // };
  // return <input 
  //   placeholder={holder} 
  //   type="text" 
  //   style={styledField}>
  //   </input>
// }

class Field extends Component{
  render(){
    const holder = 'Enter here';
    const styledField = {
      width: '300px'
    };
    return <input 
        placeholder={holder} 
        type="text" 
        style={styledField}>
        </input>
  }
}


function Btn () {
  const text ='Log in';
  const isLogged = false;
  // const res = () =>{
  //   return 'Log in';
  // }
  return <button>{}</button>  
}

function App() {
  return (
    <div className="App">
        <Header/>
        <Field/>
        <Btn/>
    </div>
  );
}

export {Header};
export default App;
