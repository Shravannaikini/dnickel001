import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.css']
})
export class MyReviewsComponent implements OnInit {

  massData = [
    {title:"Artificial Intelligence",
  totalReviews:"215",
date:"June 09",
time: "5:45pm",
name: "Sasha Cooper",
rating: "4.5"},
{title:"Artificial Intelligence",
  totalReviews:"215",
date:"June 09",
time: "5:45pm",
name: "Sasha Cooper",
rating: "4.2"},
{title:"Artificial Intelligence",
  totalReviews:"215",
date:"June 09",
time: "5:45pm",
name: "Sasha Cooper",
rating: "4"},
{title:"Artificial Intelligence",
  totalReviews:"215",
date:"June 09",
time: "5:45pm",
name: "Sasha Cooper",
rating: "4.5"},
{title:"Artificial Intelligence",
  totalReviews:"215",
date:"June 09",
time: "5:45pm",
name: "Sasha Cooper",
rating: "4"},
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
