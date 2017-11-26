import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ListaChucherias } from './ListaChucherias'
import { AgregarChucheria } from './AgregarChucheria'
import { Chucheria } from './Chucheria';

class App extends Component {
  constructor(props){  //siempre pasar props al consttuctor y al super
    super(props);
    this.state = {  //unico lugar donde se puede hacer this.state = es en el constructor
      chucherias: JSON.parse(localStorage.getItem("chucherias")) || [
        // new Chucheria("iPad 2", "1000"),
        // new Chucheria("Cargador USD", "30")
      ],
      selectedChucheria: null
    }
  }
  // did = ya paso
  // will = va a pasar
  // should? = va a pasar pero es cancelable
  // componentDidMount() { // despues que cargo

  // }
  // componentWillMount() { // antes que se cargo, pero no accedes a los props y otras cosas, poco uso
    
  // }
  // componentDidUnmount() {  // despues de salir es como que ya no hay nada, poco uso

  // }
  // componentWillUnmount() {  // antes de salir
    
  // }
  
  
  nuevaChucheria = (nuevaChucheria) => {  //por defecto reciben un parametro event de javascript
    // const nuevaChucheria = new Chucheria( 
    //   Math.random().toString(36).replace(/[^a-z]+/g, '') ,
    //   (Math.random()*100).toFixed(0) 
    // )

    this.setState(
      (oldState, props) => {
        console.log('chucheria selected',this.state.selectedChucheria, nuevaChucheria);
        if(this.state.selectedChucheria !== null) {
          const posicion = oldState.chucherias.findIndex(x => x.nombre === this.state.selectedChucheria.nombre);
          console.log("editando una chucheria en", posicion);
          oldState.chucherias[posicion] = nuevaChucheria;
        } else {
          oldState.chucherias = [...oldState.chucherias, nuevaChucheria]
        }
        return { 
          chucherias: [...oldState.chucherias ],
          selectedChucheria: null
        }
      }, () => this.save() 
      );
    
    
  }

  save() {
    localStorage.setItem("chucherias", JSON.stringify(this.state.chucherias));
  }
  onItemSelected = (item) => {
    console.log("item selected",item);
    this.setState({
      selectedChucheria: new Chucheria(item.nombre, item.precio)
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chucherias</h1>
        </header>
        { //como comentar
          false ?
            <Contador tope="5" onTopeAlcanzado={ ()=> console.log("tope") }/>
          : ''
        }
        <main>
          <AgregarChucheria onAgregada = { this.nuevaChucheria } selectedChucheria={ this.state.selectedChucheria } />
          {/* <button onClick={ this.agregar }>Agregar...</button> */}
          <ListaChucherias onItemSelected={ this.onItemSelected } color="blue" items={this.state.chucherias} />
        </main>
      </div>
    );
  }
}

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      apretado: false
    }
    //this.sumar = this.sumar.bind(this);  //solucion vieja
  }
  // sumar() {
  //   console.log("sumando");
  //   this.contador++;
  // }
  sumar = () => { //solucion considerando ecma next o sea es9
    let suma = true;
    if(this.props.tope) {
      if(this.state.contador >= this.props.tope) {
        suma = false;
        // llegamos al tope
        if(this.props.onTopeAlcanzado) {
          this.props.onTopeAlcanzado();
        }
      } else {
        console.log(`suma: ${this.state.contador}`);
      }
    }
    if (suma) this.setState(
      (oldState, props) => ({ 
        contador: oldState.contador+1
      })
    );
  }
  apretar = () => this.setState({ apretado: true});
  desapretar = () => this.setState({ apretado: false});
  render() {
    return (
      <section style={{ backgroundColor: this.state.apretado ? 'yellow' : ''}}>
        <button
          onMouseDown={this.apretar}
          onMouseUp={this.desapretar}
          onClick={this.sumar}>Apretame</button>
        <p>{this.state.contador}</p>
      </section>
    )

  }
}

export default App;
