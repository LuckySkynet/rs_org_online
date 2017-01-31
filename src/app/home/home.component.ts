import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user-model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private currentUser: User;
  private active: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.active = true;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (typeof (this.currentUser) === 'undefined' || this.currentUser === null) {
      this.router.navigateByUrl('user');
    } else {
      this.active = false;
    }
  }



}
