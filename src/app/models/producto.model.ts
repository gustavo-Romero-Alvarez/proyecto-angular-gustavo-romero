export class Producto{

    name: string;
    image: string;
    id: number;
    cantidad: number;
    body:String;

    constructor(Pnombre: string, PImgUrl: string, pPrecio: number,pbody: string ){
        this.name =Pnombre;
        this.image =PImgUrl;
        this.id= pPrecio;
        this.cantidad=0;
        this.body=pbody;
    }
}