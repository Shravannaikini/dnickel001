import { Component, OnInit } from '@angular/core';
import { CommunityDataService } from 'src/app/services/community-data.service';

@Component({
  selector: 'app-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.css']
})
export class CommunityCardComponent implements OnInit {

  communityData;
  recommendData;
  currentData;

  constructor(private communityservice: CommunityDataService) { }

  ngOnInit(): void {
    this.getDummyData();
    this.currentData = this.communityData;
  }

  getDummyData(){
    this.communityData=this.communityservice.getCommunityDummy();
    this.recommendData = this.communityservice.getRecommendDummy();
  }
}
