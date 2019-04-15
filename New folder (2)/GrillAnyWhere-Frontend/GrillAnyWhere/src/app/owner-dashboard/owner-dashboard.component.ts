import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute,Router, RouterLink } from "@angular/router";
import { GrillerService } from "../griller.service";
import * as $ from 'jquery'

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {
  private userForm:FormGroup
  msg;
  private grillers:any[]
  constructor(private route:ActivatedRoute,private router : Router,private service:GrillerService) { }

  ngOnInit() {
    this.msg=sessionStorage.getItem('ownername');
  }
  logout(){
    sessionStorage.removeItem('ownername');
    this.router.navigate(['/'])
    window.location.reload();
  }
  

}
