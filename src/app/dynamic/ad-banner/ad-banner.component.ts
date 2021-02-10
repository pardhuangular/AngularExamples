import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { AdItem } from 'src/app/class/ad-item';
import { AdDirective } from 'src/app/directive/ad.directive';
import { AdComponent } from 'src/app/model/ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {
  @Input() ads: AdItem[]=[];
  currentAdIndex = -1;
  @ViewChild(AdDirective, { static: true })
  adHost!: AdDirective;
  interval: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
