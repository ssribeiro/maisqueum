import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  page = 'index';
  password = '';
  goToPage(page) { this.page = page; }
  isOkPassword() { return this.password=='design'; }
  isWrongPassword() { return this.password!='' && this.password!='design'; }
  changePassword(event) { this.password = event; }
}
