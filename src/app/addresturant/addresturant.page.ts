import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-addresturant',
  templateUrl: './addresturant.page.html',
  styleUrls: ['./addresturant.page.scss'],
})
export class AddresturantPage implements OnInit {
  resturantname;
  address;
  phone;
  description;
  tag;
  record={};
  loader;
  public idlo;
  form=new FormGroup({
    rname: new FormControl('',[Validators.required,Validators.pattern('[ a-zA-Z]([ a-zA-Z0-9 ])+$')
  ,Validators.minLength(3),Validators.maxLength(18)]),
    raddress: new FormControl('',[Validators.required,Validators.minLength(5),
    Validators.maxLength(30)]),
    rphone: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$'),
  Validators.minLength(10),Validators.maxLength(12)]),
    rdesc: new FormControl(''),
    rtag: new FormControl('',[Validators.required,
      Validators.minLength(3),Validators.maxLength(8),
    Validators.pattern('([#a-zA-Z])([a-zA-Z0-9])+$')]),

  });
  constructor(
    private toast: ToastController,
    private service: ServiceService,
    private route: Router,
    private load: LoadingController,
    private storage: Storage,
  ) {
  }
get rname(){
  return this.form.get('rname');
}
  ngOnInit() {
    this.storage.create();
  }
  async addresturant(){
    this.record={
      name: this.resturantname,
      address: this.address,
      phone: this.phone,
      description: this.description,
      tag: this.tag
    };
   this.load.create({
     message:'adding record'
   }).then((res1)=>{
   this.loader=res1;
   this.loader.present();
   });
    await this.storage.get('emailid').then(res1=>{
       this.idlo=res1;
    });
    try {
    await this.service.addresturant(this.idlo,this.record).then(res=>{
      console.log('this dot idlo',this.idlo);
      console.log('this dot idlo',res);
   //this.showtoast('Resturant Added');
    });
   } catch (error) {
     this.showtoast(error);
    console.log('error  :',error);
   }
   setTimeout(()=>{
     this.loader.dismiss();
     this.route.navigate(['/main']);
   },2000); //
   }
showtoast(mess){
    this.toast.create({
   message: mess,
   duration: 2000
   }).then(res=> res.present());
   }
}
