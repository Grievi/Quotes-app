import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[]=[
    new Quote(1, 'Haraka haraka haina baraka','Wahenga Wahenguzi',new Date(1900,8,10)),
   new Quote (2,'Pole pole ndio mwendo','Wagenge Wahenguzi',new Date(1910,5,17)),
    new Quote(3,'Zubaa zuba utpata mwana si wako',' Wahenguzi Wenyewe',new Date(2007,11,11)),
    new Quote(4,'Omba serikali Kazi','Msee wa Nduthi',new Date(2020,3,15)),
    new Quote(5,'Mambo ya Stima wachia serikali','Meme Lord',new Date(2020,6,10)),
   new Quote (6,'Nitakufinya','Wahengezoo',new Date(2021,1,10))
   ];

   toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete:any, index:number){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
    }

    if(isComplete){
      this.quotes.splice(index,1)
    }
  }
  numberOfLikes:number=0;

  likeButtonClick(){
    this.numberOfLikes++;
  }

  disLikeButtonClick(){
    this.numberOfLikes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
