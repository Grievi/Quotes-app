import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'Bite what you can Chew', 'White.S Man'),
    new Quote(2,'When the Deal is Too Good Think Twice','Kenny Rodgers 1st'),
    new Quote(3,'Haraka haraka haina Bahati','Mhenga 001'),
    new Quote(4,'Mganga hajigangi','Wahenga '),
    new Quote(5, 'Dawa ya Deni ni Kulipa','Okush Babaa ')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
