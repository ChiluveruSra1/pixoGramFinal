import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.css']
})
export class BlockUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let authval = sessionStorage.getItem("auth");
    if (authval == null) {
      this.router.navigate(["/login"]);
    }
  }
  logout(){
    alert("Bye " + sessionStorage.getItem("username"))
    sessionStorage.clear();
    console.log("logout")
    window.location.reload()
  }

}
