import { Component, OnInit } from '@angular/core';
import {FormsService} from "../forms.service"

@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})
export class PrayerComponent implements OnInit {
    public title = this.formData.FormTitle
  constructor(private formData:FormsService) { }

  ngOnInit() {
    
  }
  cecki(item){
    console.log(item)
  }

  onSubmit(prayerForm){
    console.log(prayerForm)
  }

}
