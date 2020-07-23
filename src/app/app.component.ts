import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  program = "Angular8"

  onScroll(){
    console.log("scrolled.....")
  }
  
}
