import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { }
  @ViewChild('tabs',{static:true}) tabs:IonTabs

  ngOnInit() {
    this.tabs.select('feed');
  }

}
