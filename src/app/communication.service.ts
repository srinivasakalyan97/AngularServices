import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  private someObs = new Subject<any>()
  cast = this.someObs.asObservable()
  getheaderValue(value){
    this.someObs.next(value);
  }

  private headertext = new BehaviorSubject<any>('some text')
  castHeader = this.headertext.asObservable()
  GetHeaderTextBehaviour(value){
    this.headertext.next(value);
  }
}
