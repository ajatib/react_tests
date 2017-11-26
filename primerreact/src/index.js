import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const TituloDoble = (props) => <div>
	<h1>{props.titulo}</h1>
	<h2>{props.subtitulo}</h2>
</div>


ReactDOM.render(<TituloDoble titulo="titulo" subtitulo="subtitulo" />, document.getElementById('root'));
//registerServiceWorker(); //para PWA
