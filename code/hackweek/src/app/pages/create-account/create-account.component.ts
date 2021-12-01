import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  
	createAccount: FormGroup;

  constructor() { 
	this.createAccount = new FormGroup({
		'username': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
		'email': new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
		'password': new FormControl('', Validators.required),
		'confirm_password': new FormControl('', Validators.required),
		'picture': new FormControl(null)
	})
  }
  
  @ViewChild('profilePic') profilePic!: ElementRef;

  	url: any; 
	msg = "";	
	match: boolean = true;
	invalid: boolean = false;

	selectFile(event: any) { 
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}

		console.log(this.createAccount.get('picture')!.value)
	}
  
  clearFile(){
    this.profilePic.nativeElement.value = "";
    this.url = ""
	this.createAccount.get('picture')?.reset() 
 }

  passwordMatch(){
	let password = this.createAccount.get('password')!.value;
	let confirm_password = this.createAccount.get('confirm_password')!.value;
	if (password != '' && confirm_password != ''){
		if (password != confirm_password){
			this.msg = "Passwords do not match!"
			this.invalid = true
		} else {
			this.msg = ""
			this.invalid = false
		}
	}else {
		this.msg = ""
		this.invalid = false
	}

  }

}
