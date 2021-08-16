import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {CommonService} from '../Service/CommonService';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-add-members-form',
  templateUrl: './add-members-form.component.html',
  styleUrls: ['./add-members-form.component.css']
})
export class AddMembersFormComponent implements OnInit {
  id_number: any;
  first_name: any;
  last_name: any;
  rank: any;
  email: any;
  constructor(private FormBuilder:FormBuilder, public Service: CommonService, public route: Router,private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void 
  {
    // this.rank = 0;
  }




  post()
  {
    this.ngxService.start();
    let data={
        'id_number': this.id_number,
        'first_name':this.first_name,
        'last_name': this.last_name,
        'rank': this.rank,
        'email': this.email
            }
        this.Service.sendPostRequest(this.Service.URL +'/fire_man',data).subscribe(
        res => {
          this.ngxService.stop();
          let alert = res.more_info
          this.Service.ToastSuccess(alert);
          this.id_number='';
          this.first_name='';
          this.last_name='';
          this.rank='';
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
