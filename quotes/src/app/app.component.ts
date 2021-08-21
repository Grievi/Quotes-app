import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // quotes: any [];

  // constructor(){
  //   this.quotes = ['Bite what you can Chew','When the Deal is Too Good Think Twice','Haraka haraka haina Bahati']
  // }
  quotes:Quote[]=[
    {id:1, name:'Bite what you can Chew'},
    {id:2,name:'When the Deal is Too Good Think Twice'},
    {id:3,name:'Haraka haraka haina Bahati'},
    {id:4,name:'Mganga hajigangi'},
    {id:5, name:'Dawa ya Deni ni Kulipa'}
  ];
}
