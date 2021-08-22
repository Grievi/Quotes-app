import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[]=[
    new Quote(1, 'Haraka haraka haina baraka','Wahenga Wahenguzi'),
   new Quote (2,'Pole pole ndio mwendo','Wagenge Wahenguzi'),
    new Quote(3,'Zubaa zuba utpata mwana si wako',' Wahenguzi Wenyewe'),
    new Quote(4,'Omba serikali Kazi','Msee wa Nduthi'),
    new Quote(5,'Mambo ya Stima wachia serikali','Meme Lord'),
   new Quote (6,'Nitakufinya','Wahengezoo')
   ];

   toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete:any, index:number){
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
