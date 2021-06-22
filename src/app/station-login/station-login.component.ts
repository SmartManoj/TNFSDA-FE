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
FireCount : any;
RescueCount : any;

  constructor(private FormBuilder: FormBuilder, public Service: CommonService, public route: Router, private ngxService: NgxUiLoaderService) 
  { 
    this.GetTableResultsFire();
    this.GetTableResultsRescue();
  }

  ngOnInit()
  {
   
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
  
  Logout()
  {
    this.route.navigate(['/login']);
  }

}
