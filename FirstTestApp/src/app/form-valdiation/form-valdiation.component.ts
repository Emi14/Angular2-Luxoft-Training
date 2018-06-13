import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {forbiddenNameValidator} from "../forbiddenNameValidator";

@Component({
  selector: 'app-form-valdiation',
  templateUrl: './form-valdiation.component.html',
  styleUrls: ['./form-valdiation.component.css']
})
export class FormValdiationComponent implements OnInit {
  @ViewChild('heroForm') heroForm: NgForm;
  powers: Array<string> = ['Really smart', 'Super Flexible'];
  hero: any = {power:'',name:''};

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.heroForm.valueChanges
    //   .subscribe(data => this.onValueChanged(data));

    this.form = this.fb.group({
      name:['', [Validators.required, forbiddenNameValidator(/bob/i)]],
      street:['', Validators.minLength(3)],
      city:['', Validators.maxLength(10)],
      zip:['', Validators.pattern('[A-Za-z]{5}')]
    })
  }

  onSubmit(){
    console.log(this.hero.power)
  }

  private onValueChanged(data: any) {

  }
}
