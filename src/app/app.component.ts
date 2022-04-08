import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'gaiusAng';
  popupOpenSubscription: Subscription = new Subscription;
  constructor( @Inject(DOCUMENT) private document:any, private ccService:NgcCookieConsentService){
    
   };

  ngOnInit(){
    this.popupOpenSubscription= this.ccService.popupOpen$.subscribe(()=>{});

  }

  ngOnDestroy(){
    this.popupOpenSubscription.unsubscribe();
  }
}
