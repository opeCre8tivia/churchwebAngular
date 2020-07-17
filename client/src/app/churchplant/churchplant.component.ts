import { Component, OnInit } from '@angular/core';
import { ChurchplantService } from '../churchplant.service';

@Component({
  selector: 'app-churchplant',
  templateUrl: './churchplant.component.html',
  styleUrls: ['./churchplant.component.css']
})
export class ChurchplantComponent implements OnInit {

  public plants = []
  constructor(private _plantData:ChurchplantService) { }

  ngOnInit() {
    this.plants = this._plantData.getChurchPlants();
  }

}
