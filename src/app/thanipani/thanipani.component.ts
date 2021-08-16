import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { CommonService } from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { stringify } from '@angular/compiler/src/util';

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
  NewDate: Date;
  StationNames: any[];
  KottamNames: any[];
  Space : any = ' ';
  // FireOfficerAndTeam:any=[];

  constructor(private FormBuilder: FormBuilder, public Service: CommonService, public route: Router, private ngxService: NgxUiLoaderService) {
    this.GetFireManCount();
    if(this.Service.ThanipaniRejectedEditData.length>0)
    {
      this.GetRejectedFormData();
    }
    // if(this.Service.PreviewData)
    // {
    //   this.GetPreviewData();
    // }
    this.KottamNames = [];
    this.KottamNames = [
  {
    'kottam_name':'திருவாரூர்',
    'value': '1'
  },
  {
    'kottam_name':'நாகப்பட்டினம்',
    'value': '2'
  }
]
this.Kottam = 'தேர்வு செய்யவும்';
  }

  ngOnInit() {
    debugger
    this.RescuedMembers = false;
    this.Adipaadugal = false;
    this.AllInOnePerson = true;
    
      this.Space = ' ';
    
    
    // this.AccidentDate = new Date('mm/dd/yyyy');
    
    // this.Kottam = 0;
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
    if(this.Service.PreviewData.escaped_or_rescued.length>0)
    {
    this.EscapedorRescued = this.Service.PreviewData.escaped_or_rescued;
    this.WithoutHelp = this.Service.PreviewData.escaped_or_rescued[0].without_help;
    this.WithoutTools =  this.Service.PreviewData.escaped_or_rescued[0].without_tools;
    this.WithTools =  this.Service.PreviewData.escaped_or_rescued[0].with_tools;
    }
    this.AdipadugalFire =  this.Service.PreviewData.adipadugal_fire;
    if(this.Service.PreviewData.adipadugal_fire.length>0)
    {
    this.DeadFireMan = this.Service.PreviewData.adipadugal_fire[0].dead;
    this.InjuredFireMan = this.Service.PreviewData.adipadugal_fire[0].injured;
    this.DeadOthers =  this.Service.PreviewData.adipadugal_fire[0].dead;
    this.InjuredOthers = this.Service.PreviewData.adipadugal_fire[0].injured;
    this.Others= this.Service.PreviewData.Others;
    this.Sign= this.Service.PreviewData.Sign;
    this.AllInOnePerson= this.Service.PreviewData.AllInOnePerson;
    this.FireTeam = this.Service.PreviewData.fire_officer_and_team;
    this.ArriveACt = this.Service.PreviewData.arrive_and_act;
    this.RescuedAnimal=  this.Service.PreviewData.rescued_animal_active;
    this.RescuedAnimalName = this.Service.PreviewData.type_of_animal;
    this.NoOfAnimal = this.Service.PreviewData.no_of_animal
    }
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
      'approve_status': 0,
      'TypeofForm': 1
    }
    this.Service.PreviewData = data;
    this.route.navigate(['/Preview']);
  }
  GetFireManCount() {
    // debugger
    let data = '';
    this.Service.GetMethod(this.Service.URL + '/fire_man/count', data).subscribe(
      result => {
        debugger
        this.ngxService.stop();
        this.Count = result.data.count;
        this.TableDataFireMan = result.data.data;
      }
      , (error) => {
        // debugger

        this.ngxService.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        let alert = error.error.message
        this.Service.AlertWarning(alert);

      }
    );
  }
  GetRankAndName(id:any)
  {
    // debugger
    this.TableDataFireMan.forEach(element => {
      if(element.id_number == id.target.value)
      {
        this.FireTeamAttr.rank = element.rank;
        this.FireTeamAttr.name = element.first_name + ' ' + element.last_name;
      }
    });
    
  }
  OnChangeStation(Station)
  {
    // debugger
    // if(Station.value=='தேர்வு செய்யவும்')
    // {
    //   this.StationNames = [];
    //   this.StationNames = [{
    //     'name': 'தேர்வு செய்யவும்',
    //     'value': 'தேர்வு செய்யவும்'
    //   }
    // ]
    // }
    if(Station.value=='திருவாரூர்')
    {
      this.Station = 'திருவாரூர்'
      this.StationNames = [];
      this.StationNames = [{
        'name': 'திருவாரூர்',
        'value': 'திருவாரூர்'
      },
    {
      'name': 'மன்னார்குடி',
      'value': 'மன்னார்குடி'
    },
    {
      'name': 'நன்னிலம்',
      'value': 'நன்னிலம்'
    },
    {
      'name': 'நீடாமங்கலம்',
      'value': 'நீடாமங்கலம்'
    },
    {
      'name': 'கூத்தாநல்லூர்',
      'value': 'கூத்தாநல்லூர்'
    },
    {
      'name': 'வலைங்கைமான்',
      'value': 'வலைங்கைமான்'
    },
    {
      'name': 'குடவாசல்',
      'value': 'குடவாசல்'
    },
    {
      'name': 'திருத்துறைப்பூண்டி',
      'value': 'திருத்துறைப்பூண்டி'
    },
    {
      'name': 'கோட்டூர்',
      'value': 'கோட்டூர்'
    },
    {
      'name': 'முத்துப்பேட்டை',
      'value': 'முத்துப்பேட்டை'
    },
    {
      'name': 'பேரளம்',
      'value': 'பேரளம்'
    },
    {
      'name': 'திருமக்கோட்டை',
      'value': 'திருமக்கோட்டை'
    },
   
  ]
    }
    else if(Station.value == 'நாகப்பட்டினம்')
    {
      this.Station = 'நாகப்பட்டினம்'
      this.StationNames = [];
      this.StationNames = [{
        'name': 'நாகப்பட்டினம்',
        'value': "நாகப்பட்டினம்"
    },
    {
        'name': 'வேதாரண்யம்',
        'value': 'வேதாரண்யம்'
    },
    {
      'name': 'மயிலாடுதுறை',
        'value': 'மயிலாடுதுறை'
    },
    {
      'name': 'பூம்புகார்',
      'value': 'பூம்புகார்'
    },
    {
      'name': 'சிர்காழி',
      'value': 'சிர்காழி'
    },
    {
      'name': 'கிழ்வளூர்',
      'value': 'கிழ்வளூர்'
    },
    {
      'name': 'வேளாங்கன்னி',
      'value': 'வேளாங்கன்னி'
    },
    {
      'name': 'குத்தாலம்',
      'value': 'குத்தாலம்'
    },
    {
      'name': 'தரங்கம்பாடி',
      'value': 'தரங்கம்பாடி'
    }
  ]
  }
}
ValidCheck()
{
  
  if(this.Kottam == undefined || this.Kottam =='தேர்வு செய்யவும்')
  {
    this.Service.AlertWarning('கோட்டம் தேர்வு செய்யவும்');
    return
  }
  if(this.Station == undefined || this.Station=='தேர்வு செய்யவும்')
  {
    this.Service.AlertWarning('நிலையம் தேர்வு செய்யவும்');
    return
  }
  if(this.ArikkaiNumber == undefined)
  {
    this.Service.AlertWarning('அறிக்கை எண் குறிப்பிடுக');
    return
  }
  if(this.AccidentDate == undefined)
  {
    this.Service.AlertWarning('விபத்து நடந்த நாளை தேர்வு செய்க');
    return
  }
  if(this.FireOfficerName == undefined)
  {
    this.Service.AlertWarning('பொறுப்பு வகித்த அலுவலர் பெயர் குறிப்பிடுக');
    return
  }
  if(this.CallerName == undefined)
  {
    this.Service.AlertWarning('அழைத்தவர் பெயர் குறிப்பிடுக');
    return
  }
  if(this.AllInOnePerson == false)
  {
    if(this.OwnerName == undefined)
    {
      {
        this.Service.AlertWarning('அனுபவிப்பவரின் பெயர் குறிப்பிடுக');
        return
      }
    }
  }
  if(this.AllInOnePerson == false)
  {
    if(this.OwnerNameAddress == undefined)
    {
      {
        this.Service.AlertWarning('உரிமையாளரின் பெயர், முகவரியை குறிப்பிடுக');
        return
      }
    }
  }
  
  if(this.TelephoneNumber == undefined)
  {
    this.Service.AlertWarning('தொலைபேசி / தீ எச்சரிக்கை எண் குறிப்பிடுக');
    return
  }
  if(this.AccidentAddress == undefined)
  {
    this.Service.AlertWarning('விபத்துக்குள்ளான இடத்தின் முகவரியை குறிப்பிடுக');
    return
  }
  if(this.Job == undefined)
  {
    this.Service.AlertWarning('தொழில் குறிப்பிடுக');
    return
  }
  if(this.CallingTime == undefined)
  {
    this.Service.AlertWarning('அழைத்த நேரம் தேர்வு செய்யவும்');
    return
  }
   if(this.VehicleStartTime == undefined)
  {
    this.Service.AlertWarning('வண்டிகள் முதலில் புறப்பட்டு சென்ற நேரம் குறிப்பிடுக');
    return
  }
  if(this.VehicleReachedTime == undefined)
  {
    this.Service.AlertWarning('விபத்து நடந்த இடத்தில் வந்து சேர்ந்த நேரம் குறிப்பிடுக');
    return
  }
  if(this.IncidentTime == undefined)
  {
    this.Service.AlertWarning('நிகழ்ச்சியின் நேரம் குறிப்பிடுக');
    return
  }
  if(this.DetailAbtFire == undefined)
  {
    this.Service.AlertWarning('விபத்தை பற்றிய முழு விவரம் குறிப்பிடுக');
    return
  }
  if(this.ReasonForFire == undefined)
  {
    this.Service.AlertWarning('விபத்தை பற்றிய காரணம் குறிப்பிடுக');

    return
  }
  if(this.RescueWork == undefined)
  {
    this.Service.AlertWarning('புரிந்த பணியை குறிப்பிடுக');
    return
  }
  if(this.LastReturnOfficer == undefined)
  {
    this.Service.AlertWarning('விபத்து நடந்த இடத்தை விட்டுப் புறப்பட்ட கடைசி அலுவலரின் பெயர் குறிப்பிடுக');
    return
  }
  if(this.ReturnDateTimeFromFireAcc == undefined)
  {
    this.Service.AlertWarning('விபத்து நடந்த இடத்தை விட்டுப் புறப்பட்ட நாளும், நேரமும் குறிப்பிடுக');
    return
  }
  if(this.FireControllingTime == undefined)
  {
    this.Service.AlertWarning('தனிப்பணிக்கு ஆன மொத்த நேரம் மணி/நிமிடம் குறிப்பிடுக');
    return
  }
  if(this.AllInOnePerson == false)
  {
    if(this.FireTeam.length==0)
    {
      {
        this.Service.AlertWarning('வந்து செயலாற்றிய தீயணைப்பு அலுவலர் மற்றும் தீயணைப்பு பணியினர் பெயர்களை குறிப்பிடுக');
        return
      }
    }
  }
  if(this.RescuedAnimal == true)
  {
    if(this.RescuedAnimalName == undefined)
    {
      {
        this.Service.AlertWarning('விலங்கின் வகை/பெயர் குறிப்பிடுக');
        return
      }
    }
  }
  if(this.RescuedAnimal == true)
  {
    if(this.NoOfAnimal == undefined)
    {
      {
        this.Service.AlertWarning('எத்தனை விலங்கு குறிப்பிடுக');
        return
      }
    }
  }
  this.Submit();
}
  Submit() {
    debugger
    // this.ValidCheck();
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
      'approve_status': 0,
    
    }
    this.Service.sendPostRequest(this.Service.URL + '/rescue_call', data).subscribe(
      result => {
        this.ngxService.stop();
        let alert = result.more_info.fire_call_status
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

