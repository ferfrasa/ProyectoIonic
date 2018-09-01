import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Transaction} from '../../database'
import {AddingPage} from '../adding/adding'

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  title :string ="Movimiento";
  transactions :any;
  addingPage=AddingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    /*let transaction = new Transaction(20,"Mi primera Transaccion");
    transaction.save();*/
    console.log('ionViewDidLoad TransactionsPage');
    this.loadTransaction();
  }
  loadTransaction(){
    Transaction.all() //promesa poner valor temporal mientras retorna el dato que es
                  .then((resultados)=>{this.transactions=resultados;
                   console.log(resultados);
                  });
  }

}
