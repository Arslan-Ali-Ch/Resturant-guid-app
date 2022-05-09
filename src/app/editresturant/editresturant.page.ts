import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from './../services/service.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-editresturant',
  templateUrl: './editresturant.page.html',
  styleUrls: ['./editresturant.page.scss'],
})
export class EditresturantPage implements OnInit {
  id;
  resturantname;
  address;
  phone;
  description;
  tag;
  id2;
  resturantname2;
  address2;
  phone2;
  description2;
  tag2;
  name2;
  record={};
  listofdata=[];

  constructor(
   private toast: ToastController,
   private service: ServiceService,
   private route: Router,
   private acroute: ActivatedRoute,
   private load: LoadingController,
   private storage: Storage
  ) {
    this.id=this.acroute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getresbyid(this.id);
  }
  getresbyid(id){
    this.storage.get('emailid').then(res1=>{
      this.service.getresturantbyid(res1,id).subscribe(res=>{
        console.log('i am res',res);
         this.listofdata.push(res);
          console.log('i am list 2',this.listofdata[0].name);
          this.description2=this.listofdata[0].description;
          this.name2=this.listofdata[0].name;
          this.tag2=this.listofdata[0].tag;
          this.phone2=this.listofdata[0].phone;
          this.address2=this.listofdata[0].address;
          console.log('i am address 2',this.address2);
       });
    });

   }
   editResturant(){
    console.log('i am id ',this.id);
    this.record={
      name: this.resturantname,
      address: this.address,
      phone: this.phone,
      description: this.description,
      tag: this.tag
    };
    try {
    this.storage.get('emailid').then(res1=>{
       this.service.editResturant(res1,this.id,this.record).then(res=>{
        console.log(res);
        this.showtoast('Resturant Updated');
        this.route.navigate(['/main']);
         });
     });
    } catch (error) {
      this.showtoast(error);
     console.log('error  :',error);
    }
   }
   showtoast(mess){
    this.toast.create({
    message: mess,
    duration: 3000
    }).then(res=> res.present());
    }
}
