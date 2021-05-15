import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
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
  constructor(private FormBuilder:FormBuilder, public Service: CommonService, public route: Router) {
    
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
    this.route.navigate(['/login']);
  }
  FormGroupInit()
  {
    
  }
  post()
  {

    let data={
        'username': this.username,
        'email':this.email,
        'password': this.password,
        'mobile': this.mobile,
        'rank': this.rank
            }
  this.Service.sendPostRequest('http://0.0.0.0:8080/Register',data).subscribe(
    res => {
      console.log(res);
    }
);
  }
}
