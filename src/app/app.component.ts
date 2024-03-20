import { ChangeDetectorRef, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/service/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck,OnInit{
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private isMobileScreen = false
  @ViewChild('leftsidenav')
  public sidenav: MatSidenav | undefined;
  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isOver;
  }
  get isOver(): boolean {
    return this.isMobileScreen;
  }



  title = 'projet';
  isMenuVisible!: boolean;
  style={'background-color':'#BFD8AF'}
  norole!:boolean;
  constructor(private router : Router,private serviceAuth:AuthService,private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
   
  }
  ngDoCheck(): void {
    let currentroute = this.router.url;
    let jwt=localStorage.getItem('jwt');
   
    if (currentroute == '/auth/login' || currentroute == '/auth/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true}
    }
    logout(){
      localStorage.removeItem('jwt');
      this.router.navigate(['/auth/login']);
    }

}
