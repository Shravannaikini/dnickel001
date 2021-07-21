import { Component, OnInit } from '@angular/core';
import { CommunityDataService } from 'src/app/services/community-data.service';

@Component({
  selector: 'app-community-showcase',
  templateUrl: './community-showcase.component.html',
  styleUrls: ['./community-showcase.component.css']
})
export class CommunityShowcaseComponent implements OnInit {


  communityData;
  productData;

  constructor(private communityservice: CommunityDataService) { }

  ngOnInit(): void {
    this.getDataCommunity();
    this.getProductData();
  }

  getDataCommunity(){
    this.communityservice.getCommunitiesData().subscribe((data)=>{
      this.communityData = data;}, 
      err=>{console.log(err)});
  }

  getProductData(){
    this.communityservice.getUserProducts().subscribe((data)=>{
      this.productData = data; console.log(this.productData)}, 
      err=>{console.log(err)});
  }

}
