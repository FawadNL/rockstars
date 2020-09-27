import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Platform, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController
  ) {
    this.initFormControl();
  }

  ngOnInit() {
  }

  /**
   * @description Function to init the form control.
   */
  initFormControl() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      user_pass: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
    });
  }

  /**
   * @description Function to close the modal
   */
  navigateBack() {
    this.modalController.dismiss();
  }

}
