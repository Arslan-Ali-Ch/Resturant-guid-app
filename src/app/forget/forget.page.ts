import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
forgetpass;
  constructor(private auth: AngularFireAuth,
    private toast: ToastController) { }

  ngOnInit() {
  }
  reset(){
    console.log('i am reset');
    if(this.forgetpass){
this.auth.sendPasswordResetEmail(this.forgetpass).then((e)=>{
  this.showToast('password reset link sent to your email');
  }).catch(e=> this.showToast('no such email found'));
    }
    else{
      this.showToast('enter email first');
    }
  }
  showToast(mess){
    this.toast.create({
  message: mess,
  duration: 2000
    }).then(res=> res.present());
  }
}
