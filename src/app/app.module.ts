import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { JobAdComponent } from './dynamic/job-ad/job-ad.component';
import { ProfileComponent } from './dynamic/profile/profile.component';
import { AdBannerComponent } from './dynamic/ad-banner/ad-banner.component';
import { AdDirective } from './directive/ad.directive';
import { AdService } from './service/ad.service';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    PageNotFoundComponent,
    HomeComponent,
    JobAdComponent,
    ProfileComponent,
    AdBannerComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent],
  entryComponents:[ProfileComponent,JobAdComponent]
})
export class AppModule { }
