import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings-card',
  templateUrl: './ratings-card.component.html',
  styleUrls: ['./ratings-card.component.css']
})
export class RatingsCardComponent implements OnInit {

  massData = [
    {title:"Artificial Intelligence",
  totalReviews:"215",
date:"June 09",
time: "5:45pm",
name: "Sasha Cooper"},
{title:"Artificial Intelligence",
  totalReviews:"215",
date:"June 09",
time: "5:45pm",
name: "Sasha Cooper"},
{title:"Artificial Intelligence",
  totalReviews:"215",
date:"June 09",
time: "5:45pm",
name: "Sasha Cooper"},
{title:"Artificial Intelligence",
  totalReviews:"215",
date:"June 09",
time: "5:45pm",
name: "Sasha Cooper"},
{title:"Artificial Intelligence",
  totalReviews:"215",
date:"June 09",
time: "5:45pm",
name: "Sasha Cooper"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
