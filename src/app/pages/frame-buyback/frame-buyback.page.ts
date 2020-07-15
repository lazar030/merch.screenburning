import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Intercom } from 'ng-intercom';
import { Router } from '@angular/router';

@Component({
  selector: 'my-frame-buyback',
  templateUrl: './frame-buyback.page.html',
  styleUrls: ['./frame-buyback.page.scss']
})
export class FrameBuybackPage implements OnInit {
  title: string = 'Our Frame Buyback Program';

  form: FormGroup;
  submitted = false;

  constructor(
    public _FB: FormBuilder,
    public intercom: Intercom,
    private router: Router
  ) {
    this.form = this._FB.group({
      name: [''],
      email: ['', [Validators.email, Validators.required]],
      comment: ['']
    });
  }

  ngOnInit() {}

  get email() {
    return this.form.get('email');
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    console.log(form);
  }

  openChat(chat) {
    chat.intercom.show();
  }

  navigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
