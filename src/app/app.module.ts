import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';
import { TavlaComponent } from './produkter/tavla/tavla.component';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' //'gaius.se' //'katalog.frontdata.se' //'localhost'// it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#222'
    },
    button: {
      background: '#111'
    }
  },
  theme: 'classic',
  type: 'opt-out',
  layout: 'my-custom-layout',
  layouts: {
    "my-custom-layout": '{{messagelink}}{{compliance}}'
  },
  elements:{
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}<p>
      <a aria-label="learn more about cookies" class="cc-link" href="{{cookiePolicyHref}}" target="_blank" rel="noreferrer">{{cookiePolicyLink}}</a>
      </p></span>
    `,
  },
  content:{
    message: 'På gaius.se använder vi cookies för att ge dig en bra användarupplevelse. Vi använder google analytics som statistikverktyg för vår sida. Väljer du att Tillåta kakor/coockies på vår webplats, godkänner du att vi använder cookies, browserstorage och användning av google analytics i marknadsföringssyfte.',
 
    cookiePolicyLink: 'Läs mer om cookie/kakor',
    cookiePolicyHref: 'https://www.cookiesandyou.com/',
 
    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyHref: 'https://privacy.com',
 
    tosLink: 'hantering av Service',
    tosHref: 'https://www.timmele.se/cookies',
    header: 'Kakor används på denna webbplats. Cookies used on the website!',
    dismiss: 'avböj!',
    allow: 'Tillåt kakor/ cookies',
    deny: 'Avböj',
    link: 'läs mer',
    policy: 'Kakor Policy'
  }
};
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MainNavComponent,
    MainFooterComponent,
    TavlaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgcCookieConsentModule.forRoot(cookieConfig),
    AppRoutingModule,
    HttpClientModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA ,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
