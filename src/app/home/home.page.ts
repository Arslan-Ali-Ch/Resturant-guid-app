import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
email2;
pass2;
type=true;
mainform=new FormGroup({
email: new FormControl('',[Validators.required,Validators.email]),
password: new FormControl('',[Validators.minLength(8),Validators.required])
});

  constructor(
private auth: AngularFireAuth,
private router: Router,
private storage: Storage,
private toast: ToastController,
private load: LoadingController
                ) {}
get email(){
  return this.mainform.get('email');
}
get pass(){
  return this.mainform.get('password');
}
 async ngOnInit() {
await this.storage.create();
  }
async login(){
  if(this.email2 && this.pass2){
    const loader=this.load.create({
message: 'please wait...'
    });
    (await loader).present();
    try {
      await this.auth.signInWithEmailAndPassword(
        this.email2,this.pass2
      ).then(res=>{
        this.storage.set('uid',res.user.uid);
        this.storage.set('emailid',this.email2);
        this.showToast('Login succed');
        this.router.navigate(['/main']);
      });
    } catch (error) {
      this.showToast('email or password is invalid');
    }
    (await loader).dismiss();
  }
}
changetype(){
  this.type=!this.type;
}
navigateto(){
  this.router.navigate(['/signup']);
}
navigatetoforget(){
  this.router.navigate(['/forget']);

}
showToast(mess){
  this.toast.create({
message: mess,
duration: 2000
  }).then(res=> res.present());
}
}
