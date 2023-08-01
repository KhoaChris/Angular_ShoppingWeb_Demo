import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup , signOut, user} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  googleProvider = new GoogleAuthProvider();
  constructor(private auth: Auth) {}

  async loginGoogle() {
    let result = await signInWithPopup(this.auth, this.googleProvider);
    alert('Đã đăng nhập thành công !!!');
    console.log(result);
    return result;
  }

  logOut(){
    return signOut(this.auth);
  }
}
