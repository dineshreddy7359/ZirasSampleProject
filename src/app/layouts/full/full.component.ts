import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  isExpanded: boolean = false;
  currentUser: User;
  themeColor = 'blue';

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  onSidenavToggle() {
    this.isExpanded = !this.isExpanded;
  }

  themeChange(color) {
    this.themeColor = color;
  }

}
