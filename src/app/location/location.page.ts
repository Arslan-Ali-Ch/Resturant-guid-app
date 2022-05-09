import { ToastController } from '@ionic/angular';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Share } from '@capacitor/share';
declare const google;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild('map', {read: ElementRef, static: false }) mapRef: ElementRef;
 // map: any;
  address: string;

  latitude: number;
  longitude: number;
  geocoder2: any;
  markerlat;
  markerlng;
  flightPath: any;

  mapmarker: any;
 map: any;
 marker: any;
 geocoder = new google.maps.Geocoder();
 responseDiv: any;
 response: any;
adres=[];
  service: any;
 infowindow1: any;
i: any;
origin: any;
directionsService: any;
directionsRenderer: any;
placesService: any;
infowindow2: any;
infowindowContent: any;
infowindow: any=[];

  constructor(
    private geolocation: Geolocation,
    private toast: ToastController,
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.mymap();
  }

  mymap(){
    this.geolocation.getCurrentPosition().then((res)=>{
      this.latitude=res.coords.latitude;
      this.longitude=res.coords.longitude;
      const location=new google.maps.LatLng(this.latitude,this.longitude);
      const option={
        center: location,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map=new google.maps.Map(this.mapRef.nativeElement,option);

       this.addMarkers();
      // this.geocode1({address: 'canada'});
    });
  }
  addMarkers(){
    console.log('i am add markers');
    const latLng = {lat:this.latitude,lng:this.longitude};
    //  const pos=new google.maps.LatLng(mark.latitude,mark.longitude);
       const mapmarker2=new google.maps.Marker({
        position: latLng,

      });
      const infowindowcontent='<div>'+
    '<h2 id="firstHeading" class="firstHeading">'+'</h2>'+
    '<p>Your Location</p>'+
    '</div>';
      const window1 = new google.maps.InfoWindow({
        content:infowindowcontent,
        pixelOffSet: new google.maps.Size(0,20)
    });

     window1.open(this.map,mapmarker2);
       mapmarker2.setMap(this.map);
       mapmarker2.addListener('click', () => {
        window1.open(mapmarker2.get('map'), mapmarker2);
      });
      mapmarker2.addListener('click', () => {
        this.map.setZoom(18);
        this.map.setCenter(mapmarker2.getPosition());
      });
       this.map.addListener('click', (mapsMouseEvent) => {
        const abc=mapsMouseEvent.latLng.toJSON();
        const abc2=abc.lat;
        this.markerlat=abc.lat;
        this.markerlng=abc.lng;
       let window2=null;
        if(window2){
          window2.close();
        }
          if(this.mapmarker){
            this.mapmarker.setMap(null);
          }
          if(this.flightPath){
            this.flightPath.setMap(null);
          }
         this.mapmarker=new google.maps.Marker({
          position: mapsMouseEvent.latLng,
          title: mapsMouseEvent.latLng.title,
          // latitude: this.markers[0].latitude,
          // longitude:this.markers[0].longitude
        });
        const infowindowcontent2='<div>'+
    '<h2 id="firstHeading" class="firstHeading">Your Destination</h2>'+
    '<div>'+
    '<ion-button  id=navigate>navigate</ion-button>'+
    '<ion-button  id="fb">Social share</ion-button>'+

    '</div>'+
    '</div>';
     window2 = new google.maps.InfoWindow({
      content:infowindowcontent2,
      pixelOffSet: new google.maps.Size(0,20)
  });
        // Create a new InfoWindow.

        window2.open(this.map,this.mapmarker);
        this.mapmarker.setMap(this.map);
        this.mapmarker.addListener('click', () => {
         window2.open(this.mapmarker.get('map'), this.mapmarker);
       });
       const flightPlanCoordinates = [
        { lat: this.latitude, lng: this.longitude },
        { lat: this.markerlat, lng: this.markerlng }
      ];
       this.flightPath= new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 6,
      });

      console.log('i am current pos',this.latitude);
      console.log('i am current pos',this.longitude);
        console.log('i am destination',this.markerlat);
        console.log('i am destination',this.markerlng);
      this.flightPath.setMap(this.map);
      google.maps.event.addListener(window2,'domready',()=>{
        document.getElementById('navigate').addEventListener('click',()=>{
            window.open(
              'https://www.google.com/maps/dir/?api=1&origin='+this.latitude+','
              +this.longitude+'&destination='+this.markerlat+','+this.markerlng


              );
          });
        });
        google.maps.event.addListener(window2,'domready',()=>{
          document.getElementById('fb').addEventListener('click',()=>{
              console.log('i am facebook');
              this.socialshare();
            });
          });

        //       this.placeMarkerAndPanTo(e.latLng, this.map);
       });
   }
 async  socialshare(){
    await Share.share({
      title: 'cool stuff',
      text: 'Really awesome food you should try',
      url:'https://www.google.com/maps/dir/?api=1&origin='+this.latitude+','
      +this.longitude+'&destination='+this.markerlat+','+this.markerlng,
      dialogTitle: 'Share with buddies',
    });
   }

   showToast(mess){
    this.toast.create({
      message: mess,
     duration: 3000,
     position: 'middle',
    }).then(res => res.present());

  }
}
