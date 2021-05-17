import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() public jsonData = new EventEmitter<any>();
  flightNumber: any;
  isShow = false;
  data: any;
  form!: FormGroup;
  constructor(private service: AppServiceService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      flightNumber: this.formBuilder.control('', Validators.compose([
        Validators.required
      ])),
    });
  }
  getData() {
    this.service.getData(this.flightNumber).subscribe((response: any) => {
      this.data = response;
      this.jsonData.emit(this.data);
    }, (error) => {
      console.log('There is error', error)
    })
    this.service.sendClickEvent();
  }
}
