import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[]=[
    new Quote(1, 'Kama unajinauo, vile unaji Nauo... Monchokaa','Wagenge Wa Kanairo', 'John Maina',0,0,new Date(1900,8,10)),
   new Quote (2,'Pole pole ndio mwendo','Wahenga Wahenguzi','Abdalla Said',0,0,new Date(1910,5,17)),
    new Quote(3,'Zubaa zuba utapata mwana si wako',' Wahenguzi Wenyewe','Ogopa Mubaba',0,0,new Date(2007,11,11)),
    new Quote(4,'Omba serikali Kazi','Msee wa Nduthi','Clarkson',0,0,new Date(2020,3,15)),
    new Quote(5,'Mambo ya Stima wachia serikali','Meme Lord','Daniel Muchoki',0,0,new Date(2020,6,10)),
   new Quote (6,'Nitakufinya!','Frustrated Kenyan','Missy Elliot',0,0,new Date(2021,1,10))
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
 


  likeButtonClick(index:any){
    this.quotes[index].like++;
  }

  disLikeButtonClick(index:any){
    this.quotes[index].dislike++;
  }
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.unshift(quote);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
