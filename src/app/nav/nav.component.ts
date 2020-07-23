import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  toggle(phoneMenu,close,open){
   phoneMenu.style.left = 0
   console.log(event.target)
   close.style.display = "block"
   open.style.display = "none"
   
  }
  toggleClose(phoneMenu,open,close){
    phoneMenu.style.left = "-600px"
    open.style.display = 'block'
    close.style.display = "none"
  }

}
