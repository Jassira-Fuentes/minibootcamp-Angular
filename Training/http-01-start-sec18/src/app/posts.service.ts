import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

    constructor (private http: HttpClient) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = {title: title, content: content}
        this.http
        .post<{ name: string }>(
           'https://ng-complete-guide-6c137-default-rtdb.firebaseio.com/posts.json',
            postData,
            {
              observe: 'response'
            }
         )
         .subscribe(responseData => {
           console.log(responseData);
         }, 
         error => {
          this.error.next(error.message);
         }
         );
    }

    fetchPosts() {
      let searchParams = new HttpParams();
      searchParams = searchParams.append('print', 'pretty');
      searchParams = searchParams.append('custom', 'key');
        return this.http
    .get<{ [key: string]: Post }>(
      'https://ng-complete-guide-6c137-default-rtdb.firebaseio.com/posts.json',
    {
      headers: new HttpHeaders({'Custom-Header': 'Hello'}),
      params: searchParams, //adjunta multiples parametros, sobrescribiendo los anteriores
      responseType: 'json'
    })
    .pipe(
      map( responseData => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id:key });
          }
        }
        return postArray;
      }),
      catchError(erroRes => {
        //Send to analytics server
        return throwError(erroRes);
      })
    ) 
      // console.log(posts);
    
    }

    deletePosts(){
       return this.http.delete('https://ng-complete-guide-6c137-default-rtdb.firebaseio.com/posts.json',  {
          observe: 'events',
          responseType: 'text'
        })
        .pipe(
           tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Sent){

            }
            if (event.type === HttpEventType.Response){
              console.log(event.body)
            }
           }))

    }
}