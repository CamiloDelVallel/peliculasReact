import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App"
/*
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
*/

/*
const contenido = <div>
  <h1>Titulo    </h1>
  <div>Hola desde React</div>
</div>;
*/

//function Componente ({titulo,children}) {
/*
function Componente (props) {
  console.log(props);
  
  const titulo = props.titulo;
  const contenido = props.contenido;
  

  const {titulo, contenido} = props;



  return (
    <div className='contenedor'>
      <h1>{titulo}</h1>
      <div>{children}</div>
    </div>
  )
}
*/
ReactDOM.render(
  //<Componente titulo="titulo" contenido="Hola desde react" />,
  //<Componente titulo="titulo">Hola desde react</Componente>,
  <App />,

  document.getElementById("root")

);
