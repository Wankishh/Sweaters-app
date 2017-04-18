import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';
  constructor(public translate: TranslateService) {
    translate.addLangs(["bg", "en", "de"]);
    translate.setDefaultLang("bg");

    let browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/bg|en|de/) ? browserLang : 'en');

  }
}
