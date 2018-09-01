

import Dexie from 'dexie';

export class TransactionAppDB extends Dexie{
    transactions: Dexie.Table<ITransaction, number>; //id llavae principal crea tabla
   constructor(){
       super("MoneyMapAppDB"); //nombre de la base de datos
       this.version(1).stores({
           transactions: '++id, ammount, lat, lng, title, imgUrl' //atributos de la tabla
       });
       this.transactions.mapToClass(Transaction);
   }
}

export interface ICategory{

}
export interface ITransaction{
    id?: number; //? opcional
    title: string;
    amount: number;
    lat: number;
    lng: number;
    imageUrl: string;

}

export class Transaction implements ITransaction{
    id?: number; //? opcional
    amount: number;
    lat: number;
    lng: number;
    imageUrl: string;
    title: string
    constructor(amount:number, title:string, lat?:number, lng?:number, id?:number , imageUrl?:string){
        this.amount= amount;
        this.title=title;
        if(lat) this.lat=lat;
        if(lng) this.lng=lng;
        if(imageUrl) this.imageUrl=imageUrl;
        if(id) this.id=id;
    }
    save(){
        return db.transactions.add(this);
    }
    static all(){
        return db.transactions.orderBy("id").reverse().toArray();
    }

}
export let db = new TransactionAppDB();