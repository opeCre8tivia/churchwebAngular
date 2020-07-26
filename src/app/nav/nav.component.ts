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
   close.style.display = "block"
   open.style.display = "none"
   
  }
  toggleClose(phoneMenu,open,close){
    phoneMenu.style.left = "-600px"
    open.style.display = 'block'
    close.style.display = "none"
  
  }

  onMouseOver(eventMenu){
    eventMenu.style.display = 'block'
  }

  onMouseLeave(eventMenu){
    eventMenu.style.display = 'none'
  }

  onMouseEnter(eventMenu){
    eventMenu.style.display = "block"
  }
  
  eventMenuClick(eventMenu){
    eventMenu.style.display = "none"
  }

  phoneMenuClick(phoneMenu,open,close){
    phoneMenu.style.left = "-1000px"
    phoneMenu.style.display = "none"
    close.style.display = "none"
    open.style.display = "block"
  }
}
