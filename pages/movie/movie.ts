import {Page} from 'ionic-angular';
import { Inject } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Page({
  templateUrl: 'build/pages/movie/movie.html'
})
export class MoviePage {
    
  
    http : Http;
    movie : string;
    movies : {};
    logError : any;
    
   constructor(@Inject(Http) http: Http) {
        this.http = http;
    }   
 
    
    findMovie(event, key) {
        if(event.target.value.length > 2) {
            var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(event.target.value) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
            this.http.get(url).map(res => res.json()).subscribe(
            data => {this.movies = data.results; console.log(data);},
            err => this.logError(err),
            () => console.log('Movie Search Complete')); 
        
        
        }
          
    }
}
