import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommunicationService } from './../../communication.service'
@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit,AfterViewInit {
  headerText: any;
  @ViewChild('childthreeInput') childthreeInput:ElementRef
  @ViewChild('childthreeInputBtn') childthreeInputBtn:ElementRef

  constructor(private CommunicationService:CommunicationService) { }
  bananavalue:string
  
  set getBanana(value:string){
    this.bananavalue=value
    if(this.bananavalue=='banana'){
      alert("hello banana!")
    }

  }
  
  get getBanana():string{
    return this.bananavalue
  }
  


  ngOnInit(): void {
    this.CommunicationService.castHeader
    .subscribe(
      headertext=>this.headerText=headertext
    )
  }

  ngAfterViewInit(){
    this.childthreeInput.nativeElement.focus();
    this.childthreeInputBtn.nativeElement.innerHTML='Hello placeholder!';

  }

}
