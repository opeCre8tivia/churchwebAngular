import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChurchplantService {

  constructor() { }

  getChurchPlants(){
    return[
      {
          churchplant:'New Church Plant',
          imgUrl:"../../assets/img/kalaki.png",
          borehole:"The Borehole (Well) at Kalaki",
          boreholeImgUrl:"../../assets/img/kalakibh.png"
      },
      {
        churchplant:'Achuna New Church Plant',
        imgUrl:"../../assets/img/achuna.png",
        borehole:"The Borehole (Well) at Achuna",
        boreholeImgUrl:"../../assets/img/achunabh.png"
      },
    {
      churchplant:'Otuboi New Church Plant',
      imgUrl:"../../assets/img/otuboi.png",
      borehole:"The Borehole (Well) at Otuboi",
      boreholeImgUrl:"../../assets/img/otuboibh.png"
    },
    {
      churchplant:'Orungo New Church Plant',
      imgUrl:"../../assets/img/orungo.png",
      borehole:"The Borehole (Well) at Orungo",
      boreholeImgUrl:"../../assets/img/orungobh.png"
     },
     {
      churchplant:'Omirio New Church Plant',
      imgUrl:"../../assets/img/omirio.png",
      borehole:"The Borehole (Well) at Omiro",
      boreholeImgUrl:"../../assets/img/omiriobh.png"
    },
    {
      churchplant:'Kakure New Church Plant',
      imgUrl:"../../assets/img/kakure.png",
      borehole:"The Borehole (Well) at Kakure",
      boreholeImgUrl:"../../assets/img/kakurebh.png"
    }

   
    ]
  }
}
