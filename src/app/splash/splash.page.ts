import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private route: Router,
    private storage: Storage) {
      this.storage.create();
      this.storage.get('uid').then((res)=>{
        if(res){
          setTimeout(() => {
            this.route.navigate(['/main']);
          }, 2000);
        }
        else{
          setTimeout(() => {
            this.route.navigate(['/home']);
          }, 2000);
        }
      });

    }

  ngOnInit() {
  }

}


