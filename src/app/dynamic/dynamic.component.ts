import { Component, OnInit } from '@angular/core';
import { AdItem } from '../class/ad-item';
import { AdService } from '../service/ad.service';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  ads: AdItem[]=[];
  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
