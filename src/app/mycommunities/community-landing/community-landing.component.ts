import { Component, OnInit } from '@angular/core';
import { CommunityDataService } from 'src/app/services/community-data.service';

@Component({
  selector: 'app-community-landing',
  templateUrl: './community-landing.component.html',
  styleUrls: ['./community-landing.component.css']
})
export class CommunityLandingComponent implements OnInit {

  
  communityData;
  recommendData;
  currentData;
  buttonLeft = "button-highlight";
  buttonRight = "button-minimal";

  constructor(private communityservice: CommunityDataService) { }

  ngOnInit(): void {
    // this.getDataCommunity();
    // this.getRecommend();
    this.getDummyData();
    this.currentData = this.communityData;
  }

  getDataCommunity(){
    this.communityservice.getCommunitiesData().subscribe((data)=>{
      this.communityData = data; console.log(this.communityData)}, 
      err=>{console.log(err)});
  }

  getRecommend(){
    this.communityservice.getRecommendedCommunities().subscribe((data)=>{
      this.recommendData = data; console.log(this.recommendData)},
      err=>{console.log(err)});
  }

  swipeDataCommunity(){
    this.buttonLeft = "button-highlight";
    this.buttonRight = "button-minimal";
    this.currentData = this.communityData;
  }

  swipeDataRecommend(){
    this.buttonLeft = "button-minimal";
    this.buttonRight = "button-highlight";
    this.currentData = this.recommendData;
  }


  //dummy data functions
  getDummyData(){
    this.communityData=this.communityservice.getCommunityDummy();
    this.recommendData = this.communityservice.getRecommendDummy();
  }
  //dummy data functions
}
