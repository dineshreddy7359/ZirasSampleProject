import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  isMenuOpen: boolean = true;
  contentMargin: number = 70;
  buttonRadius: any = 50;
  currentUser: User;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen) {
      this.contentMargin = 250;
      this.buttonRadius = `${5} px`;
    } else {
      this.contentMargin = 70;
      this.buttonRadius = `${50} %`;
    }
  }

}
