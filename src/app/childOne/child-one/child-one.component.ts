import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './../../communication.service'
@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  headerOrg:any;
  Signup:boolean;
  BtnLogin:boolean;
  headertext=[{"State":"Kerala","Town":"Kollam","literacy":"100%"}]
  headertext2=[{"State":"Tamilnadu","Town":"Tirunelveli","literacy":"100%"}]

  constructor(private CommunicationService:CommunicationService) { }

  ngOnInit(): void {
  this.CommunicationService.cast
  .subscribe(
    data=>{
      this.headerOrg=data;
      console.log("header text in child 1",this.headerOrg)
    }
    )
  }
}
