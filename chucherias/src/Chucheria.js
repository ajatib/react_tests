export class Chucheria {
    constructor(nombre, precio=0) {
        if(nombre===undefined || nombre===null || typeof nombre!== "string" ) {
            throw new Error("Es obligatorio el nombre");
        }
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = "";
    }
}