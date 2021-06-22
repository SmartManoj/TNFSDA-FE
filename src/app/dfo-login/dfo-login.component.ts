import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader";


@Component({
  selector: 'app-dfo-login',
  templateUrl: './dfo-login.component.html',
  styleUrls: ['./dfo-login.component.css']
})
export class DfoLoginComponent implements OnInit {
Count: any;
TableData : any =[];
FireCount : any;
RescueCount : any;

Kottam: any = 0;
  Station: any;
  FireOfficerName: any;
  ArikkaiNumber: any;
  AccidentDate: any;
  CallerName: any
  TelephoneNumber: any;
  AccidentAddress: any;
  OwnerName: any;
  Job: any;
  OwnerNameAddress: any;
  CallingTime: any;
  VehicleStartTime: any;
  VehicleReachedTime: any;
  BetweenDistance: any;
  IncidentTime: any;
  DetailAbtFire: any;
  ReasonForFire: any;
  RescueWork: any;
  LastReturnOfficer: any;
  ReturnDateTimeFromFireAcc: any;
  FireControllingTime: any;
  Type: any;
  RescuedMembers: boolean = false;
  Adipaadugal: boolean = false;
  FireStationName: any;
  ModelName: any;
  RegisterNumber: any;
  SStartedTime: any;
  SReachedTime: any;
  SReturnTime: any;
  ReachedStationTime: any;
  TravelHours: any
  WaterPumbingTime: any;
  Rank: any;
  Number: any;
  Name: any;
  Others: any;
  Sign: any;
  AllInOnePerson: boolean = true;
  Name_TK: any;
  Sex: any;
  Address: any;
  Mobile: any;
  Age: any;
  EscapedorRescued: any = [];
  AdipadugalFire: any = [];
  AdipadugalOthers: any = [];


  constructor(private FormBuilder: FormBuilder, public Service: CommonService, public route: Router, private ngxService: NgxUiLoaderService)  
  {
    this.GetTableResultsFire();
    this.GetTableResultsRescue();
   }

  ngOnInit(): void {
  }
  
  GetTableResultsFire() {
    debugger
    let data = '';
    this.Service.GetMethod(this.Service.URL + '/fire_call/count', data).subscribe(
      result => {
        debugger
        this.ngxService.stop();
        // let alert = result.more_info
        // this.Service.ToastSuccess(alert);
      this.Count = result.data.count;
        this.TableData= result.data.data;
        let FireCountNum:any=[];
        let RescueCountNum:any=[];
        this.TableData.forEach(element => {
           if(element.type == 'theevibathu')
           {
            FireCountNum.push(element)
           }
          
        });
     this.FireCount = FireCountNum.length == 0 ? '000' : FireCountNum.length;
      }
      , (error) => {
        debugger

        this.ngxService.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        let alert = error.error.message
        this.Service.AlertWarning(alert);

      }
    );
  }
  GetTableResultsRescue() {
    debugger
    let data = '';
    this.Service.GetMethod(this.Service.URL + '/rescue_call/count', data).subscribe(
      result => {
        debugger
        this.ngxService.stop();
        // let alert = result.more_info
        // this.Service.ToastSuccess(alert);
      this.Count = result.data.count;
        this.TableData= result.data.data;
        let FireCountNum:any=[];
        let RescueCountNum:any=[];
        this.TableData.forEach(element => {
           if(element.type == 'Thanipani')
           {
            RescueCountNum.push(element)
           }
          
        });
     
     this.RescueCount = RescueCountNum.length == 0 ? '000' : RescueCountNum.length;
      }
      , (error) => {
        debugger

        this.ngxService.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        let alert = error.error.message
        this.Service.AlertWarning(alert);

      }
    );
  }

  Preview(item:any) {
    debugger
    this.ngxService.start();
    this.TableData.forEach(element => {
      if(element._id == item._id)
      {
        this.Service.PreviewData = element;
        this.ngxService.stop();
        this.route.navigate(['/Preview']);
      }
    });  
  }

  Approve(id:any) {
    debugger
    this.ngxService.start();
   
    let data = {

      'approval': 2,
      '_id': id,
    }
    this.Service.sendPostRequest(this.Service.URL + '/rescue_call', data).subscribe(
      result => {
        this.ngxService.stop();
        let alert = result.more_info
        this.Service.ToastSuccess(alert);
        console.log(result);
      }
      , (error) => {
        debugger

        this.ngxService.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        let alert = error.error.message
        this.Service.AlertWarning(alert);

      }
    );
  }
  Logout()
  {
    this.route.navigate(['/login']);
  }
}
