import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isMenuOpen:boolean = false;

  constructor() { }

 setMenu(){
   this.isMenuOpen = !this.isMenuOpen;
   console.log(this.isMenuOpen)
 }

 openWindow(url){
  window.open(url)
 }

}
