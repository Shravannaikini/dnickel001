import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityInfoComponent } from './mycommunities/community-info/community-info.component';
import { CommunityLandingComponent } from './mycommunities/community-landing/community-landing.component';
import { CommunityShowcaseComponent } from './mycommunities/community-showcase/community-showcase.component';
import { TestCase3Component } from './testSpace/test-case3/test-case3.component';

const routes: Routes = [
  {path:'',component:CommunityShowcaseComponent},
  {path:'home',component: CommunityShowcaseComponent},
  {path:'communitylanding', component:CommunityLandingComponent},
  {path:'communityinfo/:searchTerm', component:CommunityInfoComponent},
  {path:'testcase3', component: TestCase3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
