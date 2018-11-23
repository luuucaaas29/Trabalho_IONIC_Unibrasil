import { HttpRequestProvider } from './../../providers/http-request/http-request';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MostraFotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostra-fotos',
  templateUrl: 'mostra-fotos.html',
})
export class MostraFotosPage {

  public UrlImgRandom: String;
  private contador = -1;
  public Historico = [];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider) {  }

  ionViewDidLoad() {
    this.proximaFoto();
  }

  proximaFoto(){
    if(this.Historico.length - 1 > this.contador){
        this.contador = this.contador + 1;
        this.UrlImgRandom = this.Historico[this.contador];
        return;
    }
    this.httpRequest.getFotoRandomica().subscribe(
      data => {
        this.UrlImgRandom = data.url;
        this.Historico.push(data.url);
        this.contador = this.contador + 1;
      },
      error =>{
        console.log("ERRO: "+ error);
      })
  }

  imagemAnterior(){
    if(this.contador > 0){
      this.contador = this.contador - 1;
      this.UrlImgRandom = this.Historico[this.contador];
    }
  }

}
