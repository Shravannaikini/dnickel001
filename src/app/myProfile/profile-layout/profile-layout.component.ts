import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild,OnDestroy, AfterViewInit } from '@angular/core';
import { CommunityDataService } from 'src/app/services/community-data.service';
@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent implements OnInit {
  // element: any;

  productData;
  // @ViewChild('panel1') public scroll: ElementRef<any>;
  constructor(private communityService: CommunityDataService) { }

  ngOnInit(): void {
    this.getProductData();
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
