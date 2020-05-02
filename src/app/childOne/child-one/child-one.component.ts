import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommunicationService } from './../../communication.service'
import { ChildTwoComponent } from 'src/app/childTwo/child-two/child-two.component';
@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, AfterViewInit {
  headerOrg:any;
  Signup:boolean=false;
  BtnLogin:boolean=false;
  @ViewChild(ChildTwoComponent) ComponentTwoElementRef:ChildTwoComponent
  gsobj=[{"name":"powerstar","affiliation":"JanaSena","dob":"2nd Sept"}]
  ngchangesObj=[{"hello":"hi","goodday":"goodDay Buddy"}]
  headertext=[{"State":"Kerala","Town":"Kollam","literacy":"100%"}]
  headertext2=[{"State":"Tamilnadu","Town":"Tirunelveli","literacy":"100%"}]

  constructor(private CommunicationService:CommunicationService) { }

  helloMsgFromChild($event){
    alert($event)
    console.log("message from child",$event)
  }

  ngOnInit(): void {
  this.CommunicationService.cast
  .subscribe(
    data=>{
      this.headerOrg=data;
      console.log("header text in child 1",this.headerOrg)
    }
    )
  }
  ngAfterViewInit(){
    console.log("email of two",this.ComponentTwoElementRef.email)
  }
}
