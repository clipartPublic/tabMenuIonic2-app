import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/tab_pages/tab1/tab1.html',
})
    
export class Tab1 {
    
     constructor() {
         /*
        this.counter = 0;
         rx.Observable
        .interval(1000) 
        .take(3)
        .safeApply(function(x) { 
         console.log("observable: "+x); 
        })
 .subscribe(); // shows 0, 1, 2
         */
         
         
         console.log("FUNZIONA!!!");
      }

}
