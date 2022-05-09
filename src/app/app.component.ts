import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 uid;
  constructor(
    private route: Router,
    private storage: Storage
  ) {
     this.route.navigate(['/splash']);

    this.storage.create();
//     this.storage.get('uid').then(res=>{
//       if(res){
//   this.route.navigate(['/main']);
// }else{
//   this.route.navigate(['home']);
// }
//     });
  }
}
