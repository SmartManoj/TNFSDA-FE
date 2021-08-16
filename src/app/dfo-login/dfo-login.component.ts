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
  
  TableDataFire: any=[];

  constructor(private FormBuilder: FormBuilder, public Service: CommonService, public route: Router, private ngxService: NgxUiLoaderService)  
  {
    this.GetTableResultsFire();
    this.GetTableResultsRescue();
   }

  ngOnInit(): void {
  }
  
  GetTableResultsFire() {
    debugger
    this.ngxService.start();
    this.TableDataFire=[];
    let data = '';
    this.Service.GetMethod(this.Service.URL + '/fire_call/count', data).subscribe(
      result => {
        debugger
        this.ngxService.stop();
        // let alert = result.more_info
        // this.Service.ToastSuccess(alert);
      this.Count = result.data.count;
      let TempTableData = [];
        TempTableData= result.data.data;
        let FireCountNum:any=[];
     
        TempTableData.forEach(element => {
          element.Approved=false;
           if((element.type == 'theevibathu' && element.approve_status== '1')||(element.type == 'theevibathu' && element.approve_status== '2'))
           {
            FireCountNum.push(element)
            this.TableDataFire.push(element);
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
    this.ngxService.start();
    this.TableData=[];
    let data = '';
    this.Service.GetMethod(this.Service.URL + '/rescue_call/count', data).subscribe(
      result => {
        debugger
        this.ngxService.stop();
        // let alert = result.more_info
        // this.Service.ToastSuccess(alert);
      this.Count = result.data.count;
      let TemprescueData = [];
        TemprescueData= result.data.data;
    
        let RescueCountNum:any=[];
        TemprescueData.forEach(element => {
          element.Approved=false
           if((element.type == 'Thanipani'  && element.approve_status== '1')||(element.type == 'Thanipani'  && element.approve_status== '2'))
           {
            RescueCountNum.push(element)
            this.TableData.push(element)
           }
          
        });
        setTimeout(() => {
          if(this.TableDataFire.length > 0)
        {
        this.TableDataFire.forEach(element => {
          this.TableData.push(element);
        });
      }
        }, 500);
        
     
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
        this.Service.PreviewData.TypeofForm = 4
        this.ngxService.stop();
        this.route.navigate(['/Preview']);
      }
    });  
  }

  Approve(item:any) {
    debugger
    this.ngxService.start();
    let url;
    if(item.type=='Thanipani')
    {
       url = '/rescue_call/approve';
    }
    else
    {
      url = '/fire_call/approve';
    }
   
    let data = {

      'approve_status': 2,
      '_id': item._id,
    }
    this.Service.PutMethod(this.Service.URL + url, data).subscribe(
      result => {
        this.ngxService.stop();
        let alert = result.more_info
        this.Service.ToastSuccess(alert);
        item.Approved=true;
        this.GetTableResultsFire();
        this.GetTableResultsRescue();
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
