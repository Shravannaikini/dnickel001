import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DemoMaterialModule} from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { RatingsCardComponent } from './myProfile/ratings-card/ratings-card.component';
import { RatingMainComponent } from './myProfile/rating-main/rating-main.component';
import { MyReviewsComponent } from './myProfile/my-reviews/my-reviews.component';
import { RatingModule, StarRatingComponent } from 'ng-starrating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingModule } from 'angular-star-rating';
import { CommunitiesSearchComponent } from './mycommunities/communities-search/communities-search.component';
import { CommunityShowcaseComponent } from './mycommunities/community-showcase/community-showcase.component';
import { CommunitiesRoughComponent } from './testSpace/communities-rough/communities-rough.component';
import { TestCase1Component } from './testSpace/test-case1/test-case1.component';
import { TestCase2Component } from './testSpace/test-case2/test-case2.component';
import { TestCase3Component } from './testSpace/test-case3/test-case3.component';
import { CommunityLandingComponent } from './mycommunities/community-landing/community-landing.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { CommunityInfoComponent } from './mycommunities/community-info/community-info.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TestCase4Component } from './testSpace/test-case4/test-case4.component';
import { ProfileLayoutComponent } from './myProfile/profile-layout/profile-layout.component';
import { CommunityCardComponent } from './cards/community-card/community-card.component';
import { ProductCardComponent } from './cards/product-card/product-card.component';
import { SkillCardComponent } from './cards/skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingsCardComponent,
    RatingMainComponent,
    MyReviewsComponent,
    CommunitiesSearchComponent,
    CommunityShowcaseComponent,
    CommunitiesRoughComponent,
    TestCase1Component,
    TestCase2Component,
    TestCase3Component,
    CommunityLandingComponent,
    CommunityInfoComponent,
    TestCase4Component,
    ProfileLayoutComponent,
    CommunityCardComponent,
    ProductCardComponent,
    SkillCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HammerModule,
    RatingModule,
    NgbModule,
    NgxGalleryModule,
    AngularSvgIconModule.forRoot(),
    
  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
