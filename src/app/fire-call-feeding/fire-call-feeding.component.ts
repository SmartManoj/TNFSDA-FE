import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { CommonService } from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-fire-call-feeding',
  templateUrl: './fire-call-feeding.component.html',
  styleUrls: ['./fire-call-feeding.component.css']
})
export class FireCallFeedingComponent implements OnInit {
  FeedingData: any=[];
  FromDate: any;
  ToDate: any;
  TableDataFireMan: any=[];
  Count: any;
TableData : any =[];
TableDataFire: any=[];
FireCount : any;
RescueCount : any;
  TempData: any=[];
  DataTemp: any=[];
  Feeding_Total: number = 0;
  TotalAmountData: any=[];

  constructor(private FormBuilder: FormBuilder, public Service: CommonService, public route: Router, private ngxService: NgxUiLoaderService) 
  {
    this.GetTableResultsFire();
  this.GetTableResultsRescue();
  this.GetFireManCount();
   }

  ngOnInit(): void 
  {
    
  }
  GetFireManCount() {
    debugger
    let data = '';
    this.Service.GetMethod(this.Service.URL + '/fire_man/count', data).subscribe(
      result => {
        debugger
        this.ngxService.stop();
        // this.Count = result.data.count;
        this.TableDataFireMan = result.data.data;
      }
      , (error) => {
        debugger

        this.ngxService.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        let alert = error.error.message
        this.Service.AlertWarning(alert);

      }
    );
  }

  GetTableResultsFire() {
    debugger
    this.ngxService.start();
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
    debugger
    this.ngxService.start();
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

SubmitData()
{
 debugger
  this.ngxService.start();
  let data = {
    'from_date': this.FromDate,
    'to_date': this.ToDate,
  
  }
  this.Service.sendPostRequest(this.Service.URL + '/feeding_data/feeding_report', data).subscribe(
    result => {
      this.ngxService.stop();
      let alert = result.more_info
      this.FeedingData = result.data.data;
      this.TotalAmountData = result.data.total;
      this.FeedingAmountCalculation();
      // this.Service.ToastSuccess(alert);
      // console.log(result);
    }
    , (error) => {
      debugger

      this.ngxService.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
      let alert = error.error.message
      this.Service.AlertWarning(alert);

    }
  );
}
FeedingAmountCalculation()
{
  debugger
 let FinalTableData=[]
  this.FeedingData.forEach(element => {
    this.TableData.forEach(element2 => {
      if(element.call_id == element2._id)
      {
        element.vehicle_reached_time =  element2.vehicle_reached_time,
        element.vehicle_start_time = element2.vehicle_start_time,
        element.type = element2.type,
        element.accident_date = element2.accident_date
      }
    });
  });
  // this.FeedingData.forEach(element => {
  //   element.call_data.forEach(element2 => {
  //     this.TableDataFireMan.forEach(element3 => {
  //       if(element3.id_number == element2.id_number)
  //       {
  //       element2.feeding_new = '250';
  //       }
  //       else
  //       {
  //         element2.feeding_new = '-';
  //       }
  //     });
  //   });
      
  //   });
    //  
   
}
}
