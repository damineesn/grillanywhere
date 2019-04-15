import { Component, OnInit } from '@angular/core';
import { GrillerService } from "../griller.service";

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.component.html',
  styleUrls: ['./automatic.component.css']
})
export class AutomaticComponent implements OnInit {

  constructor(private service:GrillerService) { }
  private grillers:any[]
  private user:any
  ngOnInit() {
  }
  onloadfun()
  {
    this.user="Automatic";
     this.service.findByGrillerType(this.user,success=>{
      this.grillers=success;
    });
  }

}
