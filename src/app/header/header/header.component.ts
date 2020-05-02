import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './../../communication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private CommunicationService:CommunicationService) { }
  headerText="string from header...! Cool dude!";

  someFunc(){
    this.CommunicationService.getheaderValue(this.headerText);
    this.CommunicationService.GetHeaderTextBehaviour(this.headerText);
  }

  ngOnInit(): void {
      

  }

}
