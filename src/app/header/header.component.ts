import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {IonHeader, IonToolbar} from '@ionic/angular/standalone';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IonToolbar, IonHeader],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getAuthStatus().subscribe(status => {
      this.isAuthenticated = status;
    });
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
