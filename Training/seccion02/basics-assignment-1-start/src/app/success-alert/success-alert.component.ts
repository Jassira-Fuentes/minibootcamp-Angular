import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
  p{
    color: green;
    font-size: 50px;
    padding:20px;
    border: 2px solid green;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);

  }`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
