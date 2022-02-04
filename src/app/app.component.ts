import { Component, HostListener, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from './pending-changes.guard';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements ComponentCanDeactivate {
  name = 'Angular ' + VERSION.major;

  // @HostListener allows us to also guard against browser refresh, close, etc.
  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean | any {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
  }
}
