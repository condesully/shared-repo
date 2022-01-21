import { Component, ViewChild } from '@angular/core';
import { localeIt, MbscDatepicker } from '@mobiscroll/angular';
@ViewChild('myDatepicker', { static: false })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shared-repo';

  localeIt = localeIt
  value:any

  //instance: MbscDatepicker;
  //issue:Property 'instance' has no initializer and is not definitely assigned in the constructor.ts(2564)
  
  
  myOpen() {
     // this.instance.open(); // NOTE: this.instance is only available after the ngAfterViewInit lifecycle event
  }
}
