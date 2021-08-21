import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    {id:1, name:'Bite what you can Chew'},
    {id:2,name:'When the Deal is Too Good Think Twice'},
    {id:3,name:'Haraka haraka haina Bahati'},
    {id:4,name:'Mganga hajigangi'},
    {id:5, name:'Dawa ya Deni ni Kulipa'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
