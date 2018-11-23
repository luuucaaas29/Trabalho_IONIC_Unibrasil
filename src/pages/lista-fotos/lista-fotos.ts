import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpRequestProvider } from '../../providers/http-request/http-request';

/**
 * Generated class for the ListaFotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-fotos',
  templateUrl: 'lista-fotos.html',
})
export class ListaFotosPage {

  public objJSON;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaFotosPage');
    this.httpRequest.getFotosLista().subscribe(
      data => {
        // tratando retorno JSON
        const obj = (data as any);
        console.log("obj: ");
        console.log(obj);
        this.objJSON = JSON.parse(obj._body);
        console.log(this.objJSON);
      },
      error =>{
        console.log("ERRO: "+ error);
      })
  }

}
