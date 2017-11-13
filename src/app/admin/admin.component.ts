import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { CreatenewComponent } from '../admin/modal/createnew/createnew.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isMenuup = false;
  bsModalRef : BsModalRef;
  data: any = {
    state : "",
    district : "",
    taluka : ""
  };
  states: Array<object>;
  districts: Array<object>;
  talukas: Array<object>;

  constructor(private loginService : LoginService, private modalService : BsModalService) {
   }

   addState(recvstate){
     this.states = this.loginService.setState(recvstate);
     console.log("this.states",this.states);
    //  this.data.state = '';
   };

   addDistrict(recvstate, recvdistrict) {
    this.districts = this.loginService.setDistrict(recvstate, recvdistrict);
    // this.data.district = '';
   };

   addTaluka(recvstate, recvdistrict, recvtaluka) {
     this.talukas = this.loginService.setTaluka(recvstate, recvdistrict, recvtaluka);
   }

  addNewDistrict(){
    let config = {
      animated: true,
      keyboard: true,
      backdrop: false,
      ignoreBackdropClick: true,
      class: 'modal-md'
    };
    // Pass a TemplateRef or a component as a first argument and config as a second (optionally).
    this.bsModalRef = this.modalService.show(CreatenewComponent, config); 
  }

  ngOnInit() {
  }

}
