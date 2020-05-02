import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationService } from './../../communication.service'
@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit,OnChanges {
  headerOrg: any;
  loginmsg: any;
  email="childcomponent@two.com"
  private _getrsetrv:any;
  name="childtwoComponent"
  constructor(private CommunicationService:CommunicationService) { }

  @Input() helloproperty:Array<string>
  @Input() helloproperty2:Array<string>
  @Input() loginout:boolean;
  @Input() signup:boolean;
  @Input() changesobj:Array<string>

  get gettersetterValue():Array<any>{
    return this._getrsetrv;
  }

 @Input()
  set gettersetterValue(value:Array<any>){
     this._getrsetrv=value
     if(this._getrsetrv[0].name=='powerstar'){
       console.log("Wohooo Power*");
     }
     console.log("this._getrsetrv",this._getrsetrv)
  }

  helloguru(){
    alert("hello guru");
  }

  ngOnInit(): void {
    this.CommunicationService.cast
    .subscribe(
      data=>{
        this.headerOrg=data;
        console.log("header text in child 2",this.headerOrg)
      }
      )
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
    const loginout=changes['loginout']
    const signup=changes['signup']
    if(changes['loginout']){
    if(loginout.currentValue==true){
      this.loginmsg="LoggedIn Buddy Enjoy your time!!!"
    }
    else{
      this.loginmsg="Woho! It takes a min to signup! Please signup!"
    }
  }
    if(changes['signup']){
    if(signup.currentValue==true){
      this.loginmsg="Oh New User? Signup for free Buddy"
    }
    else{
      this.loginmsg="Oh! comeon lets login and Rock!"
    }
  }
  }
}
