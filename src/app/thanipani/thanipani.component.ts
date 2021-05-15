import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';

@Component({
  selector: 'app-thanipani',
  templateUrl: './thanipani.component.html',
  styleUrls: ['./thanipani.component.css']
})
export class ThanipaniComponent implements OnInit {
  Kottam            :any;
  Station           :any;
  FireOfficerName   :any;
  ArikkaiNumber     :any;
  AccidentDate      :any;
  CallerName        :any
  TelephoneNumber   :any;
  AccidentAddress   :any;
  OwnerName         :any;
  Job               :any;
  OwnerNameAddress  :any;
  CallingTime       :any;
  VehicleStartTime  :any;
  VehicleReachedTime:any;
  BetweenDistance   :any;
  IncidentTime      :any;
  DetailAbtFire     :any;
  ReasonForFire     :any;
  RescueWork        :any;
  LastReturnOfficer :any;
  ReturnDateTimeFromFireAcc :any;
  FireControllingTime :any;
  Type:any;
  RescuedMembers:any;
  Adipaadugal :any;
  FireStationName :any;
  ModelName :any;
  RegisterNumber :any;
  SStartedTime :any;
  SReachedTime : any;
  SReturnTime :any;
  ReachedStationTime :any;
  TravelHours :any
  WaterPumbingTime :any;
  Rank :any;
  Number :any;
  Name :any;
  Others :any;
  Sign:any;

  constructor(private FormBuilder:FormBuilder, public Service: CommonService, public route: Router) { }

  ngOnInit(): void {
  }

  post()
  {

    let data=[{
        'Kottam': this.Kottam,
        'Station':this.Station,
        'FireOfficerName': this.FireOfficerName,
        'ArikkaiNumber': this.ArikkaiNumber,
        'AccidentDatev': this.AccidentDate
            }]
  this.Service.sendPostRequest('dummy',data).subscribe(
    res => {
      console.log(res);
    }
);
  }

}
