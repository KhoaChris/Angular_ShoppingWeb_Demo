import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup , signOut, authState, User} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | null = null;
  googleProvider = new GoogleAuthProvider();
  constructor(private auth: Auth) {
    authState(auth).subscribe(user => {
      console.log(user);
      if(user){
        this.user = user;
      }else{
        this.user = null;
      }
    })
  }

  async loginGoogle() {
    let result = signInWithPopup(this.auth, this.googleProvider);
    alert('Đã đăng nhập thành công !!!');
    console.log(result);
    return result;
  }

  async logOut(){
    return signOut(this.auth);
  }
}
