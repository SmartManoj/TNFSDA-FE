import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { CommonService } from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-thanipani',
  templateUrl: './thanipani.component.html',
  styleUrls: ['./thanipani.component.css']
})
export class ThanipaniComponent implements OnInit {
  public WithoutHelp: Array<any> = [];
  public WithoutHelpATTR: any = {};
  public WithoutTools: Array<any> = [];
  public WithoutToolsAttr: any = {};
  public WithTools: Array<any> = [];
  public WithToolsAttr: any = {};
  public ArriveACt: Array<any> = [];
  public ArriveActAttr: any = {};
  public FireTeam: Array<any> = [];
  public FireTeamAttr: any = {};
  public DeadFireMan: Array<any> = [];
  public DeadFireManAttr: any = {};
  public InjuredFireMan: Array<any> = [];
  public InjuredFireManAttr: any = {};
  public DeadOthers: Array<any> = [];
  public DeadOthersAttr: any = {};
  public InjuredOthers: Array<any> = [];
  public InjuredOthersAttr: any = {};
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
  Count: any;
  TableData: any = [];
  TableDataFireMan: any =[];
  RescuedAnimal: any;
  NoOfAnimal: any;
  RescuedAnimalName: any;

  // FireOfficerAndTeam:any=[];

  constructor(private FormBuilder: FormBuilder, public Service: CommonService, public route: Router, private ngxService: NgxUiLoaderService) {
    this.GetFireManCount();
    if(this.Service.ThanipaniRejectedEditData.length > 0)
    {
      this.GetRejectedFormData();
    }
  }

  ngOnInit() {
    this.RescuedMembers = false;
    this.Adipaadugal = false;
    this.AllInOnePerson = true;
   
    
    // this.Kottam = 0;
  }
  GetRejectedFormData()
  {
    debugger
    this.Kottam = this.Service.ThanipaniRejectedEditData.kottam;
    this.Station = this.Service.ThanipaniRejectedEditData.station;
    this.FireOfficerName = this.Service.ThanipaniRejectedEditData.fire_officer_name; 
    this.ArikkaiNumber = this.Service.ThanipaniRejectedEditData.arikkai_number;
    this.AccidentDate = this.Service.ThanipaniRejectedEditData.accident_date;
    this.CallerName = this.Service.ThanipaniRejectedEditData.caller_name;
    this.TelephoneNumber = this.Service.ThanipaniRejectedEditData.telephone_number;
    this.AccidentAddress = this.Service.ThanipaniRejectedEditData.accident_address;
    this.OwnerName = this.Service.ThanipaniRejectedEditData.owner_name;
    this.Job = this.Service.ThanipaniRejectedEditData.occupation;
    this.OwnerNameAddress = this.Service.ThanipaniRejectedEditData.owner_name_address;
    this.CallingTime = this.Service.ThanipaniRejectedEditData.calling_time;      
    this.VehicleStartTime = this.Service.ThanipaniRejectedEditData.vehicle_start_time;  
    this.VehicleReachedTime = this.Service.ThanipaniRejectedEditData.vehicle_reached_time;
    this.BetweenDistance = this.Service.ThanipaniRejectedEditData.between_distance;
    this.IncidentTime = this.Service.ThanipaniRejectedEditData.incident_time;
    this.DetailAbtFire = this.Service.ThanipaniRejectedEditData.detail_about_incident;
    this.ReasonForFire = this.Service.ThanipaniRejectedEditData.reason_fortheincident;
    this.RescueWork = this.Service.ThanipaniRejectedEditData.rescue_work;
    this.LastReturnOfficer = this.Service.ThanipaniRejectedEditData.last_return_officer;
    this.ReturnDateTimeFromFireAcc = this.Service.ThanipaniRejectedEditData.return_date_time_from_fire_acc;
    this.FireControllingTime = this.Service.ThanipaniRejectedEditData.fire_controlling_time;
    this.Type = this.Service.ThanipaniRejectedEditData.type;
    this.RescuedMembers = this.Service.ThanipaniRejectedEditData.escaped_or_rescued_active;
    this.Adipaadugal = this.Service.ThanipaniRejectedEditData.adipaadugal_active;
    this.EscapedorRescued = this.Service.ThanipaniRejectedEditData.escaped_or_rescued;
    this.WithoutHelp = this.Service.ThanipaniRejectedEditData.escaped_or_rescued[0].without_help;
    this.WithoutTools =  this.Service.ThanipaniRejectedEditData.escaped_or_rescued[0].without_tools;
    this.WithTools =  this.Service.ThanipaniRejectedEditData.escaped_or_rescued[0].with_tools;
    this.AdipadugalFire =  this.Service.ThanipaniRejectedEditData.adipadugal_fire;
    this.DeadFireMan = this.Service.ThanipaniRejectedEditData.adipadugal_fire[0].dead;
    this.InjuredFireMan = this.Service.ThanipaniRejectedEditData.adipadugal_fire[0].injured;
    this.DeadOthers =  this.Service.ThanipaniRejectedEditData.adipadugal_fire[0].dead;
    this.InjuredOthers = this.Service.ThanipaniRejectedEditData.adipadugal_fire[0].injured;
    this.Others= this.Service.ThanipaniRejectedEditData.Others;
    this.Sign= this.Service.ThanipaniRejectedEditData.Sign;
    this.AllInOnePerson= this.Service.ThanipaniRejectedEditData.AllInOnePerson;
    this.FireTeam = this.Service.ThanipaniRejectedEditData.fire_officer_and_team;
    this.ArriveACt = this.Service.ThanipaniRejectedEditData.arrive_and_act;
    this.RescuedAnimalName = this.Service.ThanipaniRejectedEditData.type_of_animal;
    this.RescuedAnimal = this.Service.ThanipaniRejectedEditData.rescued_animal_active;
    this.NoOfAnimal = this.Service.ThanipaniRejectedEditData.no_of_animal;
  
  }
  WithoutHelpAdd() {
    debugger
    this.WithoutHelp.push(this.WithoutHelpATTR)
    this.WithoutHelpATTR = {};
  }

  WithoutHelpDelete(index: any) {
    this.WithoutHelp.splice(index, 1);
  }
  WithoutToolsAdd() {
    debugger
    this.WithoutTools.push(this.WithoutToolsAttr)
    this.WithoutToolsAttr = {};
  }

  WithoutToolsDelete(index: any) {
    this.WithoutTools.splice(index, 1);
  }
  WithToolsAdd() {
    debugger
    this.WithTools.push(this.WithToolsAttr)
    this.WithToolsAttr = {};
  }

  WithToolsDelete(index: any) {
    this.WithTools.splice(index, 1);
  }
  ArriveActAdd() {
    debugger
    this.ArriveACt.push(this.ArriveActAttr)
    this.ArriveActAttr = {};
  }

  ArriveActDelete(index: any) {
    this.ArriveACt.splice(index, 1);
  }
  FireTeamAdd() {
    debugger
    this.FireTeam.push(this.FireTeamAttr)
    this.FireTeamAttr = {};
  }

  FireTeamDelete(index: any) {
    this.FireTeam.splice(index, 1);
  }
  DeadFireManAdd() {
    debugger
    this.DeadFireMan.push(this.DeadFireManAttr)
    this.DeadFireManAttr = {};
  }

  DeadFireManDelete(index: any) {
    this.DeadFireMan.splice(index, 1);
  }
  InjuredFireManAdd() {
    debugger
    this.InjuredFireMan.push(this.InjuredFireManAttr)
    this.InjuredFireManAttr = {};
  }

  InjuredFireManDelete(index: any) {
    this.InjuredFireMan.splice(index, 1);
  }
  DeadOthersAdd() {
    debugger
    this.DeadOthers.push(this.DeadOthersAttr)
    this.DeadOthersAttr = {};
  }

  DeadOthersDelete(index: any) {
    this.DeadOthers.splice(index, 1);
  }
  InjuredOthersAdd() {
    debugger
    this.InjuredOthers.push(this.InjuredOthersAttr)
    this.InjuredOthersAttr = {};
  }

  InjuredOthersDelete(index: any) {
    this.InjuredOthers.splice(index, 1);
  }
  Preview() {
    debugger
    this.EscapedorRescued = [];
    this.EscapedorRescued.push(
      {
        'without_help': this.WithoutHelp,
        'without_tools': this.WithoutTools,
        'with_tools': this.WithTools
      });
    this.AdipadugalFire.push(
      {
        'dead': this.DeadFireMan,
        'injured': this.InjuredFireMan
      })

    this.AdipadugalOthers.push(
      {
        'dead': this.DeadOthers,
        'injured': this.InjuredOthers
      })

    let data = {
      'kottam': this.Kottam,
      'station': this.Station,
      'fire_officer_name': this.FireOfficerName,
      'arikkai_number': this.ArikkaiNumber,
      'accident_date': this.AccidentDate,
      'caller_name': this.CallerName,
      'telephone_number': this.TelephoneNumber,
      'accident_address': this.AccidentAddress,
      'owner_name': this.AllInOnePerson == true ? this.CallerName : this.OwnerName,
      'occupation': this.Job,
      'owner_name_address': this.AllInOnePerson == true ? this.CallerName : this.OwnerNameAddress,
      'calling_time': this.CallingTime,
      'vehicle_start_time': this.VehicleStartTime,
      'vehicle_reached_time': this.VehicleReachedTime,
      'between_distance': this.BetweenDistance + 'kms',
      'incident_time': this.IncidentTime,
      'detail_about_incident': this.DetailAbtFire,
      'reason_fortheincident': this.ReasonForFire,
      'rescue_work': this.RescueWork,
      'last_return_officer': this.LastReturnOfficer,
      'return_date_time_from_fire_acc': this.ReturnDateTimeFromFireAcc,
      'fire_controlling_time': this.FireControllingTime,
      'type': 'Thanipani',
      'escaped_or_rescued_active': this.RescuedMembers,
      'escaped_or_rescued': this.EscapedorRescued,
      'adipaadugal_active': this.Adipaadugal,
      'arrive_and_act': this.ArriveACt,
      'adipadugal_fire': this.AdipadugalFire,
      'adipadugal_others': this.AdipadugalOthers,
      'fire_officer_and_team': this.FireTeam,
      'Others': this.Others,
      'Sign': this.Sign,
      'AllInOnePerson': this.AllInOnePerson,
      'rescued_animal_active': this.RescuedAnimal,
      'type_of_animal':this.RescuedAnimalName,
      'no_of_animal':this.NoOfAnimal,
      'approve_status': 0
    }
    this.Service.PreviewData = data;
    this.route.navigate(['/Preview']);
  }
  GetFireManCount() {
    debugger
    let data = '';
    this.Service.GetMethod(this.Service.URL + '/fire_man/count', data).subscribe(
      result => {
        debugger
        this.ngxService.stop();
        this.Count = result.data.count;
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
  GetRankAndName(id:any)
  {
    debugger
    this.TableDataFireMan.forEach(element => {
      if(element.id_number == id.target.value)
      {
        this.FireTeamAttr.rank = element.rank;
        this.FireTeamAttr.name = element.first_name + ' ' + element.last_name;
      }
    });
    
  }

  Submit() {
    debugger
    this.ngxService.start();
    this.EscapedorRescued = [];
    this.EscapedorRescued.push(
      {
        'without_help': this.WithoutHelp,
        'without_tools': this.WithoutTools,
        'with_tools': this.WithTools
      });
    this.AdipadugalFire.push(
      {
        'dead': this.DeadFireMan,
        'injured': this.InjuredFireMan
      })

    this.AdipadugalOthers.push(
      {
        'dead': this.DeadOthers,
        'injured': this.InjuredOthers
      })
    let data = {

      'kottam': this.Kottam,
      'station': this.Station,
      'fire_officer_name': this.FireOfficerName,
      'arikkai_number': this.ArikkaiNumber,
      'accident_date': this.AccidentDate,
      'caller_name': this.CallerName,
      'telephone_number': this.TelephoneNumber,
      'accident_address': this.AccidentAddress,
      'AllInOnePerson': this.AllInOnePerson == true ? '1' : '0',
      'owner_name': this.AllInOnePerson == true ? this.CallerName : this.OwnerName,
      'occupation': this.Job,
      'owner_name_address': this.AllInOnePerson == true ? this.CallerName : this.OwnerNameAddress,
      'calling_time': this.CallingTime,
      'vehicle_start_time': this.VehicleStartTime,
      'vehicle_reached_time': this.VehicleReachedTime,
      'between_distance': this.BetweenDistance + 'kms',
      'incident_time': this.IncidentTime,
      'detail_about_incident': this.DetailAbtFire,
      'reason_fortheincident': this.ReasonForFire,
      'rescue_work': this.RescueWork,
      'last_return_officer': this.LastReturnOfficer,
      'return_date_time_from_fire_acc': this.ReturnDateTimeFromFireAcc,
      'fire_controlling_time': this.FireControllingTime,
      'type': 'Thanipani',
      'escaped_or_rescued_active': this.RescuedMembers == true ? '1' : '0',
      'escaped_or_rescued': this.EscapedorRescued,
      'arrive_and_act': this.ArriveACt,
      'adipaadugal_active': this.Adipaadugal == true ? '1' : '0',
      'adipadugal_fire': this.AdipadugalFire,
      'adipadugal_others': this.AdipadugalOthers,
      'fire_officer_and_team': this.FireTeam,
      'Others': this.Others,
      'Sign': this.Sign,
      'rescued_animal_active': this.RescuedAnimal == true ? '1' : '0',
      'type_of_animal':this.RescuedAnimalName,
      'no_of_animal':this.NoOfAnimal,
      'approval': 0,
    
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

  // GetTableResults() {
  //   debugger
  //   let data = '';
  //   this.Service.GetMethod(this.Service.URL + '/fire_call/count', data).subscribe(
  //     result => {
  //       debugger
  //       this.ngxService.stop();
  //       // let alert = result.more_info
  //       // this.Service.ToastSuccess(alert);
  //       let data=[];
  //       data = result.data.id;

  //       console.log(result);
  //     }
  //     , (error) => {
  //       debugger

  //       this.ngxService.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
  //       let alert = error.error.message
  //       this.Service.AlertWarning(alert);

  //     }
  //   );
  // }

}
