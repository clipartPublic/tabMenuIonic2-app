import {Page} from 'ionic-angular';
import {Tab1} from '../tab_pages/tab1/tab1';
import {Tab2} from '../tab_pages/tab2/tab2';
import {Tab3} from '../tab_pages/tab3/tab3';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
   
  tab1Root: any = Tab1;
  tab2Root: any = Tab2;
  tab3Root: any = Tab3;
    
}
