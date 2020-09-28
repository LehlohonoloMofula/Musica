import { Component, OnInit } from "@angular/core";
//import { AuthenticationService } from "../core/authentication.service";
//import { CurrentUser } from "../account/login/current-user";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.css"],
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
 // currentUser: CurrentUser;

  constructor(
 //  private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
 //   this.getCurrentUser();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  // getCurrentUser(): void {
  //   this.authenticationService.currentUser.subscribe((currentUser) => {
  //     this.currentUser = currentUser;
  //   });
  // }

  // signOut() {
  //   this.authenticationService.signOut();
  //   this.router.navigate(["/"]);
  //   return false;
  // }
}
