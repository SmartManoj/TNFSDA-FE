import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Login ! : FormGroup;
  username: any;
  password:any;
  constructor(private FormBuilder:FormBuilder, public Service: CommonService, public route: Router) { }

  ngOnInit(){
  }
  login()
  {
    this.route.navigate(['/thanipani']);
  }
  post()
  {

    let data=[{
        'username': this.username,
        'email':this.password       
            }]
  this.Service.sendPostRequest('dummy',data).subscribe(
    res => {
      console.log(res);
    }
);
  }
}
