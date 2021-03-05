import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  
  get windowRef() {
    return window
  }
}
