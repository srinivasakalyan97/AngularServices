import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from './../../communication.service'
@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  headerOrg: any;

  constructor(private CommunicationService:CommunicationService) { }

  @Input() helloproperty:Array<string>
  @Input() helloproperty2:Array<string>

  ngOnInit(): void {
    this.CommunicationService.cast
    .subscribe(
      data=>{
        this.headerOrg=data;
        console.log("header text in child 2",this.headerOrg)
      }
      )
  }

}
