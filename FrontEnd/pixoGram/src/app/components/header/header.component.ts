import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  
  constructor(private ref:ChangeDetectorRef) { 
    ref.markForCheck();
  
  }
  userpic:string ;
  ngOnInit(): void {
  this.userpic = sessionStorage.getItem("userpic");
  console.log(this.userpic);


  }

}
