import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
email2;
password2;
name2;
type=true;
mainform=new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(8)]),
  name: new FormControl('',[Validators.required,Validators.minLength(4)])
});

  constructor(
    private toats: ToastController,
    private auth: AngularFireAuth,
    private load: LoadingController,
    private router: Router
  ) { }
get email(){
  return this.mainform.get('email');
}
get pass(){
 return this.mainform.get('password');
}
get name(){
 return this.mainform.get('name');
}
  ngOnInit() {
  }

  async signup(){
    if(this.formvalidate()){
      const loader=this.load.create({
        message: 'Signing Up...'
      });
      (await loader).present();
    try {
      await this.auth.createUserWithEmailAndPassword(this.email2,this.password2).then(res=>{
        this.router.navigate(['/home']);
      });
      } catch (error) {
        this.showToast(error);
            }
            (await loader).dismiss();
        }
    }
  formvalidate(){
    if(!this.email){
      this.showToast('Enter Email');
     return false;
   }
   if(!this.pass){
     this.showToast('enter password');
     return false;
   }
   return true;
  }
changetype(){
  this.type=!this.type;
}

  navigateto(){
    this.router.navigate(['/home']);
   }
  showToast(mess){
    this.toats.create({
      message:mess,
      duration: 2000
    }).then(res=> res.present());
  }
}
