import React from 'react';
import PropTypes from 'prop-types';

export class ListaChucherias extends React.Component {  //statefull component
    onClick = (item) => {
        // console.log("click lista", item, this.props);
        this.props.onItemSelected(item);
    }
    render() {
        return (
            <section>
                <h2 className="App"
                    style={{ //json de javascript dentro del reemplazo de variables
                        color: this.props.color | "red", //cuando usamos componentes con estados se usa this.props
                        backgroundColor: "antiquewhite",
                        padding: 20
                    }}>Lista</h2>
                    {
                        this.props.items.length === 0 ?
                            <p>No hay items</p>
                        :
                        <ul>
                            {
                                this.props.items.map( 
                                    item => 
                                        <li onClick={ () => this.onClick(item) } key={item.nombre+item.precio}>{item.nombre} - ${item.precio}</li>
                                )
                            }
                        </ul>
                        
                    }
                
            </section>
        );
    }
}
// export const ListaChucherias = (props) => {
//     let subtitulo = "st";
//     const arrayLIs = [2,3,4].map( item => <li>{item}</li>);
//     return (
//         <section>
//             <h2 className={subtitulo}
//                 style={{ //json de javascript dentro del reemplazo de variables
//                     color: props.color | "red",
//                     backgroundColor: "antiquewhite",
//                     padding: 20
//                 }}>Lista</h2>
//             <ul>
//                 {
//                         [2,3,4].map( item => 
//                     <li>{item}</li>)
//                 }
//             </ul>
//         </section>
//     );

// }
ListaChucherias.defaultProps = {
    color: "blue"
}
ListaChucherias.propTypes = {
    color: PropTypes.string
}