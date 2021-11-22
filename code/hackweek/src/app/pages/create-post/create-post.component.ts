import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  
  reviewForm: FormGroup;

  constructor() {
    this.reviewForm = new FormGroup({
      'Title': new FormControl(null),
      'Description': new FormControl(null),
      'code': new FormControl(null),
      'language': new FormControl(null),
      'codeLink': new FormControl(null),
      'file': new FormControl(null),
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.reviewForm.getRawValue());
    // this.database.list('reviews').push(this.reviewForm.getRawValue());
    this.reviewForm.reset();
    // this.router.navigate
    
  }


}
