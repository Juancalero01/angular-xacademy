import { Component } from '@angular/core';
import { appType } from './app.type';
import { appData } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-xacademy';
  icon: string = 'visibility_off';
  dataSource: appType[] = appData;
  showData: boolean = true;
  displayedColumns: string[] = ['name', 'cost'];

  toggleDataVisibility() {
    this.icon =
      this.icon === 'visibility_off' ? 'visibility' : 'visibility_off';
    this.showData = this.icon === 'visibility_off' ? true : false;
  }
}
