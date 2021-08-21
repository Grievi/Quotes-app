import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // quote = 'Bite what You can Chew'
  quotes: any [];

  constructor(){
    this.quotes = ['Bite what you can Chew','When the Deal is Too Good Think Twice','Haraka haraka haina Bahati']
  }
}
