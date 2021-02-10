import { Injectable } from "@angular/core";
import { AdItem } from "../class/ad-item";
import { JobAdComponent } from "../dynamic/job-ad/job-ad.component";
import { ProfileComponent } from "../dynamic/profile/profile.component";
@Injectable({
  providedIn: "root",
})
export class AdService {
  getAds() {
    return [
      new AdItem(ProfileComponent, {
        name: "Bombasto",
        bio: "Brave as they come",
      }),

      new AdItem(ProfileComponent, {
        name: "Dr IQ",
        bio: "Smart as they come",
      }),

      new AdItem(JobAdComponent, {
        headline: "Hiring for several positions",
        body: "Submit your resume today!",
      }),

      new AdItem(JobAdComponent, {
        headline: "Openings in all departments",
        body: "Apply today",
      }),
    ];
  }
}
