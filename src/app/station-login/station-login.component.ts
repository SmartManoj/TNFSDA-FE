import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-station-login',
  templateUrl: './station-login.component.html',
  styleUrls: ['./station-login.component.css']
})
export class StationLoginComponent implements OnInit {
Count: any;
TableData : any =[];
TableDataFire: any=[];
FireCount : any;
RescueCount : any;
  active: number;
  Rescue_work: any;
  Type_of_form: any;
  date: any;
  NilayamName: any;
  constructor(private FormBuilder: FormBuilder, public Service: CommonService, public route: Router, private ngxService: NgxUiLoaderService) 
  { 
    this.GetTableResultsFire();
    this.GetTableResultsRescue();
  }

  ngOnInit()
  {
   
  }
  Feeding()
  {
    this.route.navigate(['/feeding']);
  }
  Thanipani()
  {
    this.route.navigate(['/stationlogin']);
  }
  EditRejectedForm(item: any)
  {
    this.Service.ThanipaniRejectedEditData = item;
    this.route.navigate(['/thanipani']);

  }
  GetTableResultsFire() {
    //debugger
    this.ngxService.start();
    let data = '';
    this.Service.GetMethod(this.Service.URL + '/fire_call/count', data).subscribe(
      result => {
        //debugger
        this.ngxService.stop();
        // let alert = result.more_info
        // this.Service.ToastSuccess(alert);
      this.Count = result.data.count;
      let TempTableData = [];
        TempTableData= result.data.data;
        let FireCountNum:any=[];
     
        TempTableData.forEach(element => {
           if(element.type == 'theevibathu')
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
   // debugger
    this.ngxService.start();
    let data = '';
    this.Service.GetMethod(this.Service.URL + '/rescue_call/count', data).subscribe(
      result => {
        //debugger
        this.ngxService.stop();
        // let alert = result.more_info
        // this.Service.ToastSuccess(alert);

      this.Count = result.data.count;
      let TemprescueData = [];
        TemprescueData= result.data.data;
    
        let RescueCountNum:any=[];
        TemprescueData.forEach(element => {
           if(element.type == 'Thanipani')
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
      if(this.TableData.length > 0)
      {
      this.NilayamName = this.TableData[0].station;
      }
        }, 600);
        
     
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
  ViewStatus(item:any)
  {
    this.ngxService.start();
    this.Rescue_work = item.rescue_work;
    this.Type_of_form = item.type;
    this.date = item.accident_date;
    debugger
    if(item.approve_status == 0)
    {
      this.active = 1;
    }
    else if(item.approve_status == 1)
    {
      this.active = 2;
    }
    else
    {
      this.active = 3;
    }
    this.ngxService.stop();
  }
  Profile()
  {
    this.route.navigate(['/profile']);
  }
  Logout()
  {
    this.route.navigate(['/login']);
  }

}
