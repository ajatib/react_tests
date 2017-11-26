//import {Producto} from './clases';

//"use strict";


function run(){
	a = 5;
}
run();
console.log(a);


const cocacola = new Producto(1,"Cocacola");


//desestructurar

let {nombre, precio} = cocacola;
console.log(nombre,precio);




console.log(cocacola instanceof Producto);

Producto.prototype.light = false;


//arrow function

const x = function(t) {
	console.log(t);
}

const x2 = (t) => {
	console.log(t);
}
const x3 = t => console.log(t);

const sumar = (a,b) => a+b;




function cotizacion(){
	return new Promise( (resolve, reject)=> {
		var request = new XMLHttpRequest();
		request.open("get", "https://api.coindesk.com/v1/bpi/currentprice.json");
		request.onload = function() {

			resolve();

		};
		request.onerror = function() {
			reject();
		}

	})
}



