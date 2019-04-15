import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    let pokemon;
    this.getPokemon();
   }

  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    let otherpoke =[]
    bulbasaur.subscribe(data => {
      console.log("Got Bulbasaur!", data['name'], 'abilities:')
      for(var ability in data['abilities']){
        let url = data['abilities'][ability]['ability']['url']
        let abil = this._http.get(url);
        abil.subscribe(data => {
          console.log('Got ability', data['name'])
          console.log('Other pokemon with this are:')
          for(var poke in data['pokemon']){
            console.log(data['pokemon'][poke]['pokemon']['name'])
          }
          console.log('.....')
        })

        //console.log(data['abilities'][ability]['ability']['name'])
      }
      
    })
  }


}
