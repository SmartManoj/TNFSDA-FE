import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Login ! : FormGroup;
  email: any;
  password:any;
  rank: any;
  // rank:any;
  constructor(private FormBuilder:FormBuilder, public Service: CommonService, public route: Router,private ngxService: NgxUiLoaderService) { }

  ngOnInit(){
  }
  
  // login()
  // {
    
  // }
  post()
  {
    this.ngxService.start();
    let data={
        'email': this.email,
        'password':this.password,
        'rank': this.rank       
            }
        this.Service.sendPostRequest(this.Service.URL +'/login',data).subscribe(
        res => {
          this.ngxService.stop();
          this.route.navigate(['/stationlogin']);
          console.log(res);
        }
        ,(error) => {
          debugger      
          
            this.ngxService.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
            let alert = error.error.more_info
            this.Service.AlertWarning(alert);
           
      }
);
  }
}
