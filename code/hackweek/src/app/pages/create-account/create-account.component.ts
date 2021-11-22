import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  
  constructor() { 
    
  }
  @ViewChild('profilePic') myInputVariable!: ElementRef;

  ngOnInit(): void {
  }

  url: any; 
	msg = "";
	

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
    console.log(this.url)
	}
  
  clearFile(){
    this.myInputVariable.nativeElement.value = "";
    this.url = ""
  }

}
