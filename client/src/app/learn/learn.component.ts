import { Component,Input, OnInit } from '@angular/core';
import { LernServiceService } from '../lern-service.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  public name = "";
  public nameNow = "";

  @Input() public parentData;

  //property binding
  isDisabled = true;

  public isSignedIn = false;

 public items = []

 
  constructor(private _lnService:LernServiceService) {

   }

  ngOnInit() {
    this.items= this._lnService.getItems();
  }
  
  changeName(inp){
    this.name = "Simon";
    console.log(inp.value);
  }


  onKeyDown(btn, inp){
        console.log('calledddd')
        console.log(typeof(inp.value.length))
      if(inp.value.length >= 6){
        this.isDisabled = false;
       btn.style.background = "orange"
      }
      else{
        this.isDisabled = true
      }
  }

}
