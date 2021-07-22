import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild,OnDestroy, AfterViewInit } from '@angular/core';
import { CommunityDataService } from 'src/app/services/community-data.service';
import { CardServiceService } from 'src/app/services/card-service.service';
@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent implements OnInit {
  // element: any;

  productData;
  products:any;
  communities:any;
  // @ViewChild('panel1') public scroll: ElementRef<any>;
  constructor(private communityService: CommunityDataService, private service: CardServiceService) { }

  ngOnInit(): void {
    this.getProductData();
    this.service.getProducts().subscribe(data=>{console.log(data);this.products=data.products});
    this.service.getComunities().subscribe(data=>{console.log(data);this.communities=data.groups});
  }

  onWheel(event: WheelEvent): void {
    (<Element>event.target).parentElement.scrollLeft += event.deltaY;
    event.preventDefault();
  } 

  // ngAfterViewInit():void
  // {
  //   //console.log('worked')
  //   this.element=this.scroll.nativeElement;

    

  //  // console.log(this.element);
    
  // }

getProductData(){
  this.productData = this.communityService.getUserProductDummy();
}


rightmove(event)
  {
    event.scrollLeft+= 150;
  
  }
  leftmove(event)
  {
    event.scrollLeft-=150;
    
  }
  

}
