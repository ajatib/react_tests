import React from 'react';
import { CampoTexto } from './CampoTexto'
import { Chucheria } from './Chucheria';

export class AgregarChucheria extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chucheria: new Chucheria("")
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("cambian props", nextProps);
        if(nextProps.selectedChucheria !== null) {
            this.setState({
                chucheria: nextProps.selectedChucheria
            });
        }
    }
    agregar = (event) => {
        console.log("agregarchucheria::agregar");
        if( this.props.onAgregada ) this.props.onAgregada(this.state.chucheria);
        this.setState({
            chucheria: new Chucheria("")
        });
    }
    campoChange = (campo, value) => {
        console.log(`agregarchucheria::campoChange ${campo}`, value);
        this.setState(
            (oldState, props) => ({ 
                chucheria: {
                    __proto__: Chucheria,
                    ...oldState.chucheria,
                    [campo]: value
                }
            })
        );      
    }
    render() {
        return (
            <ContenedorFormulario>
                <form>
                    <h2>Agregar nueva Chucheria</h2>
                    <CampoTexto onValueChange={ (v) => this.campoChange('nombre', v) } label="Nombre" value={this.state.chucheria.nombre} field="nombre"/>
                    <CampoTexto onValueChange={ (v) => this.campoChange('precio', v) } label="Precio" type="number" value={this.state.chucheria.precio} field="precio"/>
                    <button type="button" onClick={ this.agregar }>Agregar...</button> 
                </form>
            </ContenedorFormulario>

        )
    }
}

const ContenedorFormulario = (props) => {
    console.log(props);
    return (
        <div>
            { props.children }
        </div>
    )
}