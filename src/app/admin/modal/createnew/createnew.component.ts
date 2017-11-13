import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule }  from '@angular/forms';

@Component({
  selector: 'app-createnew',
  templateUrl: './createnew.component.html',
  styleUrls: ['./createnew.component.css']
})
export class CreatenewComponent implements OnInit {

  updateData: object;
  

  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService) {

    this.updateData = {
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      language : "",
      rating : ""
    }
  }

  ngOnInit() {
  }

}
