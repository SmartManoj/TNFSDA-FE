import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

// import { NgxSpinnerService } from "ngx-spinner";
// import  }from"@angular/compiler";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  Registration ! : FormGroup;
  username: any;
  password:any;
  email:any;
  mobile:any;
  rank:any;
  first_name: any;
  last_name: any;
  id_number: any;


 constructor(private FormBuilder:FormBuilder, public Service: CommonService, public route: Router,private ngxService: NgxUiLoaderService) {
    
   }

  ngOnInit() {
    this.FormGroupInit();
    this.Registration = new FormGroup({
      Name : new FormControl(''),
    })
    
    // this.login()
  }
  login()
  {
    this.route.navigate(['/']);
  }
  FormGroupInit()
  {
    
  }
  post()
  {
    this.ngxService.start();
    
    let data={
        'id_number': this.id_number,
        'first_name': this.first_name,
        'last_name':this.last_name,
        'email':this.email,
        'password': this.password,
        'mobile': this.mobile,
        'rank': this.rank,
              }
      this.Service.sendPostRequest(this.Service.URL + '/register',data).subscribe(
            result => {
              if(result)
              {
                debugger
                this.ngxService.stop();
                let alert = result.more_info
                this.Service.ToastSuccess(alert);
                this.route.navigate(['/login']);
              }
              console.log(result);
            }
            ,(error) => {
              debugger      
              
                this.ngxService.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
                let alert = error.error.message
                this.Service.AlertWarning(alert);
               
          }
);
  }
}
