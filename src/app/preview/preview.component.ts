import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader";
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
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
  RescuedMembers:boolean = false;
  Adipaadugal :boolean=false;
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
  AllInOnePerson:boolean = true;
  EscapedorRescued: any=[];
  WithoutHelp: any=[];
  WithoutTools: any=[];
  WithTools: any=[];
  AdipadugalFire: any=[];
  DeadFire: any=[];
  InjuredFire: any=[];
  DeadOthers: any=[];
  InjuredOthers: any=[];
  FireTeam: any=[];
  ArriveACt: any=[];
  TypeofForm: number;
  constructor(public Service: CommonService, public route: Router, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void 
  {
    debugger
    this.Kottam = this.Service.PreviewData.kottam;
    this.Station = this.Service.PreviewData.station;
    this.FireOfficerName = this.Service.PreviewData.fire_officer_name; 
    this.ArikkaiNumber = this.Service.PreviewData.arikkai_number;
    this.AccidentDate = this.Service.PreviewData.accident_date;
    this.CallerName = this.Service.PreviewData.caller_name;
    this.TelephoneNumber = this.Service.PreviewData.telephone_number;
    this.AccidentAddress = this.Service.PreviewData.accident_address;
    this.OwnerName = this.Service.PreviewData.owner_name;
    this.Job = this.Service.PreviewData.occupation;
    this.OwnerNameAddress = this.Service.PreviewData.owner_name_address;
    this.CallingTime = this.Service.PreviewData.calling_time;      
    this.VehicleStartTime = this.Service.PreviewData.vehicle_start_time;  
    this.VehicleReachedTime = this.Service.PreviewData.vehicle_reached_time;
    this.BetweenDistance = this.Service.PreviewData.between_distance;
    this.IncidentTime = this.Service.PreviewData.incident_time;
    this.DetailAbtFire = this.Service.PreviewData.detail_about_incident;
    this.ReasonForFire = this.Service.PreviewData.reason_fortheincident;
    this.RescueWork = this.Service.PreviewData.rescue_work;
    this.LastReturnOfficer = this.Service.PreviewData.last_return_officer;
    this.ReturnDateTimeFromFireAcc = this.Service.PreviewData.return_date_time_from_fire_acc;
    this.FireControllingTime = this.Service.PreviewData.fire_controlling_time;
    this.Type = this.Service.PreviewData.type;
    this.RescuedMembers = this.Service.PreviewData.escaped_or_rescued_active;
    this.Adipaadugal = this.Service.PreviewData.adipaadugal_active;
    this.EscapedorRescued = this.Service.PreviewData.escaped_or_rescued;
    this.WithoutHelp = this.Service.PreviewData.escaped_or_rescued[0].without_help;
    this.WithoutTools =  this.Service.PreviewData.escaped_or_rescued[0].without_tools;
    this.WithTools =  this.Service.PreviewData.escaped_or_rescued[0].with_tools;
    this.AdipadugalFire =  this.Service.PreviewData.adipadugal_fire;
    this.DeadFire = this.Service.PreviewData.adipadugal_fire[0].dead;
    this.InjuredFire = this.Service.PreviewData.adipadugal_fire[0].injured;
    this.DeadOthers =  this.Service.PreviewData.adipadugal_fire[0].dead;
    this.InjuredOthers = this.Service.PreviewData.adipadugal_fire[0].injured;
    this.Others= this.Service.PreviewData.Others;
    this.Sign= this.Service.PreviewData.Sign;
    this.AllInOnePerson= this.Service.PreviewData.AllInOnePerson;
    this.FireTeam = this.Service.PreviewData.fire_officer_and_team;
    this.ArriveACt = this.Service.PreviewData.arrive_and_act;
    this.TypeofForm = this.Service.PreviewData.TypeofForm;
  }
  BackToForm()
  {
    if(this.TypeofForm==1)
    {
      this.route.navigate(['/thanipani']);
    }
    else if(this.TypeofForm==2)
    {
      this.route.navigate(['/theevibathu']);
    }
    else if(this.TypeofForm==3)
    {
      this.route.navigate(['/sfo_login']);
    }
    else if(this.TypeofForm==4)
    {
      this.route.navigate(['/dfo_login']);
    }
  }
  captureScreen(): void 
  {  
    debugger
    this.ngxService.start();
    let data = document.getElementById('downloadpdf');  //Id of the table
    if(data)
    {
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      // let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      // const doc = new jspdf.jsPDF();
      let pdf = new jspdf.jsPDF('p', 'mm', 'a4'); 
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight) 
      if(this.Type == 'Thanipani') 
      {
      pdf.save('TNFRS_RESCUE_CALL_DATA'); // Generated PDF   
      }
      else
      {
        pdf.save('TNFRS_FIRE_CALL_DATA'); // Generated PDF 
      }
      this.ngxService.stop();
    });  
  }
  }  

}
