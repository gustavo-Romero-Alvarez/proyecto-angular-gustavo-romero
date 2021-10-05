import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  errorimage="https://i.pinimg.com/originals/0c/ea/6a/0cea6af976c3b89f0d79d200f4a136e0.gif"
  constructor() { }

  ngOnInit(): void {
  }

}
