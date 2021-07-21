import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'hammerjs';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import { CommunityDataService } from 'src/app/services/community-data.service';

@Component({
  selector: 'app-community-info',
  templateUrl: './community-info.component.html',
  styleUrls: ['./community-info.component.css']
})
export class CommunityInfoComponent implements OnInit {

  q:any; 
  communityData:any;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,private communityservice: CommunityDataService) { }

  ngOnInit(): void {
    this.q = this.route.snapshot.paramMap.get("searchTerm")
    this.getDataCommunity();


    this.galleryOptions = [
      {
          width: '100%',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = [
      {
          small: 'https://www.wearegurgaon.com/wp-content/uploads/2018/12/best-art-galleries-in-gurgaon.jpg',
          medium: 'https://www.wearegurgaon.com/wp-content/uploads/2018/12/best-art-galleries-in-gurgaon.jpg',
          big: 'https://www.wearegurgaon.com/wp-content/uploads/2018/12/best-art-galleries-in-gurgaon.jpg'
      },
      {
        small: 'https://static.toiimg.com/thumb/msid-72091883,width-1200,height-900,resizemode-4/.jpg',
        medium: 'https://static.toiimg.com/thumb/msid-72091883,width-1200,height-900,resizemode-4/.jpg',
        big: 'https://static.toiimg.com/thumb/msid-72091883,width-1200,height-900,resizemode-4/.jpg'
      },
      {
        small: 'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Vancouver-Art-Gallery-via-Tourism-Vancouver.jpg',
        medium: 'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Vancouver-Art-Gallery-via-Tourism-Vancouver.jpg',
        big: 'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Vancouver-Art-Gallery-via-Tourism-Vancouver.jpg'
      },
      {
        small: 'https://thumbs.dreamstime.com/b/art-gallery-ontario-toronto-inside-view-canada-134288865.jpg',
        medium: 'https://thumbs.dreamstime.com/b/art-gallery-ontario-toronto-inside-view-canada-134288865.jpg',
        big: 'https://thumbs.dreamstime.com/b/art-gallery-ontario-toronto-inside-view-canada-134288865.jpg'
      }
  ];
  }


  getDataCommunity(){
    this.communityservice.getCommunityData(this.q).subscribe((data)=>{this.communityData = data; console.log(this.communityData)}, err=>{console.log(err)});
  }

  getDate(strm:any){
    let dstring = strm.split(/(\s+)/);
    let dateOnly = dstring[0];
    let cDate = dateOnly.split("-");
    let d = new Date(cDate[0],cDate[1] , cDate[2]);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let finalDate = da+" "+mo+", "+ye;
    return finalDate;
  }

}
