import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    {id:1, name:'Bite what you can Chew', author:'White.S Man'},
    {id:2,name:'When the Deal is Too Good Think Twice',author:'Kenny Rodgers 1st'},
    {id:3,name:'Haraka haraka haina Bahati',author:'Mhenga 001'},
    {id:4,name:'Mganga hajigangi',author:'Wahenga '},
    {id:5, name:'Dawa ya Deni ni Kulipa',author:'Okush Babaa '}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
