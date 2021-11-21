import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sampleCode = "print(\"Here is some sample code.\")\nfor i in range(5):\n\tprint(\"Hello.\")"
  sampleImage = "../../../assets/pic.JPG"
  sampleUsername = "paulhemingway123"
  sampleTitle = "Print statements and For loops!"
  sampleDescription = "In this code, I first print 'Here is some sample code.' Then, I use a for loop to print 'Hello.' 5 times."
  sampleTime = "44m"

  constructor() { }

  ngOnInit(): void {
  }

}
