import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  ProfileInfo: any;
  first_name: any;
  last_name: any;

  constructor(private FormBuilder:FormBuilder, public Service: CommonService, public route: Router,private ngxService: NgxUiLoaderService) 
  {
    this.GetProfileInfo();
  }

  ngOnInit(): void {
    
  }

  GetProfileInfo() {
    debugger
    this.ngxService.start();
    
    let data = {
      'id_number': this.Service.ID_Number
    }
    this.Service.GetMethod(this.Service.URL + '/fire_man/profile', data).subscribe(
      result => {
        debugger
        this.ngxService.stop();      
        this.ProfileInfo= result.data.data;
   this.first_name = this.ProfileInfo.first_name;
   this.last_name = this.ProfileInfo.last_name;
      }
      , (error) => {
        debugger
        this.ngxService.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        let alert = error.error.message
        this.Service.AlertWarning(alert);

      }
    );
  }
}
