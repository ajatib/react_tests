
class Item {}

class Producto extends Item {

	constructor(id=0,nombre=""){
		super();
		this.precio =0;
		this.nombre = nombre;
		this.getId = function() {
			return id;
		}
	}
	metodo1(){
		return this.precio =0;
	}

}

