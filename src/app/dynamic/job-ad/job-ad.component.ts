import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-ad',
  templateUrl: './job-ad.component.html',
  styleUrls: ['./job-ad.component.css']
})
export class JobAdComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
