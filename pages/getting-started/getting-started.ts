import {Page} from 'ionic-angular';
import { Inject } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
    
    status : string;
    http : Http;

    
   constructor() {

    }   
 
    
    



}
