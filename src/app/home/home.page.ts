import { environment } from './../../environments/environment';
import { Component } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  windowRef: any;

  phoneNumber : string

  verificationCode: string;

  user: any;
  constructor(public win:LoginService) {
    firebase.initializeApp(environment.firebase)
  }
  ngOnInit() {
    
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }

  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber;

    firebase.auth().signInWithPhoneNumber('+91'+num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;
                    console.log(result.user);
                    

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }


}
