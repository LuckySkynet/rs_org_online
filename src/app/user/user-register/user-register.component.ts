import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegisterService } from './user-register.service';
import { User } from '../user-model';

declare var jQuery:any;

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  private userFormGroup: FormGroup;
  private userInfo: User = new User();
  private result:string;
  private active:boolean = true;

  @ViewChild('feedback') private feedback:ElementRef;

  private formErrors = {
    'username': '',
    'password': '',
    'confirmPassword': '',
    'formError': ''
  }

  private validationMessage = {
    'username': {
      'required': '用户名必须输入。',
      'minlength': '用户名至少4位。'
    },
    'password': {
      'required': '密码必须输入。',
      'minlength': '密码至少要8位。'
    },
    'confirmPassword': {
      'required': '重复密码必须输入。',
      'minlength': '密码至少要8位。',
      'validateEqual': "两次输入的密码不一致。"
    },
  }

  constructor(
    private fb: FormBuilder,
    private userRegisterService: UserRegisterService,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.userFormGroup = this.fb.group({
      'username': [
        this.userInfo.username,
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      "password": [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      "confirmPassword": [
        this.userInfo.confirmPassword,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]
    });
    this.userFormGroup.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any): void {
    if (!this.userFormGroup) { return; }
    const form = this.userFormGroup;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessage[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  doRegister(): void {
    if (this.userFormGroup.valid) {
      this.userInfo = this.userFormGroup.value;
      this.userRegisterService.register(this.userInfo)
        .subscribe(
        data => {
          console.log(data);
          this.result = 'Success';
          this.active = false;
        },
        error => {
          this.result = 'Failure';
          this.active = false;
        });
    } else {
      this.formErrors.formError = '表单包含无效元素，请检查表单。';
    }
    jQuery(this.feedback.nativeElement).modal('show');
  }

}
