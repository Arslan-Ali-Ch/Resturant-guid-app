import { ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { NgxStarsComponent } from 'ngx-stars';
@Component({
  selector: 'app-resturantdetail',
  templateUrl: './resturantdetail.page.html',
  styleUrls: ['./resturantdetail.page.scss'],
})
export class ResturantdetailPage implements OnInit {
  @ViewChild(NgxStarsComponent)
  star2: NgxStarsComponent;
  public setstar;
  id;
  index;
  id2;
  tag;
  name;
  address;
  phone;
  description;
  listofdata=[];
  constructor(
    private toast: ToastController,
    private service: ServiceService,
    private acrouter: ActivatedRoute,
    private router: Router,
    private load: LoadingController,
    private storage: Storage,
  ) {


    this.id=this.acrouter.snapshot.paramMap.get('id');
    this.index=this.acrouter.snapshot.paramMap.get('index');
    const i=this.index+'in';
    this.storage.get(i).then(e=>{
        this.setstarvalue(e);
         this.setstar=e;
         this.star2.setRating(e);
        console.log('i am e',e);
    });
    console.log('i am index',this.index);
    console.log('i am index',this.index+'index');

}


  ngOnInit() {

    this.storage.create();
    this.getresbyid(this.id);
  }
  setstarvalue(e){
    this.setstar=e;
  }
  onRatingSet(event){
const r=event;
const i=this.index+'in';
this.storage.set(i,r);
  }
  getresbyid(id){
    this.storage.get('emailid').then(res1=>{
    this.service.getresturantbyid(res1,id).subscribe(res=>{
       this.listofdata.push(res);
       console.log('i am list',this.listofdata[0].name);
       this.description=this.listofdata[0].description;
       this.name=this.listofdata[0].name;
       this.tag=this.listofdata[0].tag;
       this.phone=this.listofdata[0].phone;
       this.address=this.listofdata[0].address;
     });
    });
   }
   deletres(){
    console.log('i am id del',this.id);
     try {
       this.storage.get('emailid').then(res1=>{
      this.service.deletereas(res1,this.id).then(res=>{
        this.showtoast('Resturant deleted');
        });
     });
     } catch (error) {
       this.showtoast('error occure');
     }
     this.router.navigate(['/main']);
    }
    showtoast(mess){
      this.toast.create({
      message: mess,
      duration: 3000
      }).then(res=> res.present());
      }
      gotoedit(){
        this.router.navigate(['/editresturant/',this.id]);
        }
        gotoloc(){
        this.router.navigate(['/location']);
        }
}
