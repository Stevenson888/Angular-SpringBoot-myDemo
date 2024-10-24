import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import axios from 'axios';
import { Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';

// import {serialize} from '../shared/utilities/serialize';
import {catchError, filter, map} from 'rxjs/operators';

// export enum RequestMethod {
//   Get = 'GET',
//   Head = 'HEAD',
//   Post = 'POST',
//   Put = 'PUT',
//   Delete = 'DELETE',
//   Options = 'OPTIONS',
//   Patch = 'PATCH'
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//
//   headers = new HttpHeaders({
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   });
//
//   constructor(private http: HttpClient) {
//   }
//
//   get(path: string, args?: any): Observable<any> {
//     const options = {
//       headers: this.headers,
//       withCredentials: true,
//       params: undefined
//     };
//
//     if (args) {
//       options.params = serialize(args);
//     }
//
//     return this.http.get(path, options)
//       .pipe(catchError(this.checkError.bind(this)));
//   }
//
//   post(path: string, body: any, customHeaders?: HttpHeaders): Observable<any> {
//     return this.request(path, body, RequestMethod.Post, customHeaders);
//   }
//
//   put(path: string, body: any): Observable<any> {
//     return this.request(path, body, RequestMethod.Put);
//   }
//
//   delete(path: string, body?: any): Observable<any> {
//     return this.request(path, body, RequestMethod.Delete);
//   }
//
//   private request(path: string, body: any, method = RequestMethod.Post, custemHeaders?: HttpHeaders): Observable<any> {
//     const req = new HttpRequest(method, path, body, {
//       headers: custemHeaders || this.headers,
//       withCredentials: true
//     });
//
//     return this.http.request(req).pipe(filter(response => response instanceof HttpResponse))
//       .pipe(map((response: HttpResponse<any>) => response.body))
//       .pipe(catchError(error => this.checkError(error)));
//   }
//
//   // Display error if logged in, otherwise redirect to IDP
//   private checkError(error: any): any {
//     if (error && error.status === 401) {
//       // this.redirectIfUnauth(error);
//     } else {
//       // this.displayError(error);
//     }
//     throw error;
//   }
//
// }



// import { Injectable } from '@angular/core';
// import { Httpclient} from '@angular/common/http';
@Injectable({
  providedIn:'root'
})
export class RequestService {
  public baseUrl:string='http://localhost:8080';

  headers = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });

  constructor(public http:HttpClient){ }

  //  Way 1 - Promise 封装 HttpClient Request
  get(api:any){
    return new Promise((resolve,reject)=>{
      this.http.get(this.baseUrl+api).subscribe((response)=>{
        resolve(response);
      })
    })
  }

  // //  Way 2 - Observable 封装 HttpClient Request
  // // get(path: string, args: any): Observable<any> {
  // get(path: any): Observable<any> {
  //   // const options = {
  //   //   headers: this.headers,
  //   //   withCredentials: true,
  //   //   params: undefined
  //   // };
  //   // if (args) {
  //   //   options.params = this.serialize(args);
  //   // }
  //   console.log('Observable GET')
  //   // return this.http.get(this.baseUrl+path, options)
  //   return this.http.get(this.baseUrl+path)
  //     // .pipe(catchError(this.checkError.bind(this)));
  // }
  // private serialize(obj: any): HttpParams {
  //   let params = new HttpParams();
  //
  //   for (const key in obj) {
  //     if (obj.hasOwnProperty(key) && !this.looseInvalid(obj[key])) {
  //       params = params.set(key, obj[key]);
  //     }
  //   }
  //   return params;
  // }
  // private looseInvalid(a: string | number): boolean {
  //   return a === '' || a === null || a === undefined;
  // }
  // // Display error if logged in, otherwise redirect to IDP
  // private checkError(error: any): any {
  //   if (error && error.status === 401) {
  //     // this.redirectIfUnauth(error);
  //   } else {
  //     // this.displayError(error);
  //   }
  //   throw error;
  // }

  // //  Way 3 - promise 封装 axios Request
  // axiosGet(api:any){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(this.baseUrl+api)
  //       .then(function(response){
  //         // handle success
  //         resolve(response)
  //       });
  //   })
  // }







  // let task = new Observable((observer:any)=>{
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then((response )=>{
  //       observer.next( response.data);
  //       observer.complete();
  //     })
  //     .catch((error)=>{
  //       observer.error( error );
  //     });
  // });
  // task.subscribe({
  //   next(data){ console.log('data:',data);},
  //   error(err){ console.log('something wrong occurred:'+ err);},
  //   complete(){ console.log('done');}
  // });
  //
  // get(url:string, urlParams?:HttpParams):Observable<any>{
  //   let me = this;
  //   return this.http.get(this.appConfig.baseApiPath + url, {headers:this.getHeaders(),  params:urlParams} )
  //     .catch(function(error:any){
  //       console.log("Some error in catch");
  //       if (error.status === 401 || error.status === 403){
  //         me.router.navigate(['/logout']);
  //       }
  //       return Observable.throw(error || 'Server error')
  //     });
  // }

  // get(api:any){
  //   return new Promise((resolve,reject)=>{
  //     this.http.get(this.baseUrl+api).subscribe((response)=>{
  //       resolve(response)
  //     }, error=>{
  //       reject(error)//接口报错抛出错误信息
  //     })
  //   })
  // }

  // get(api:any){
  //   return new Promise((resolve,reject)=>{
  //     this.http.get(this.baseUrl+api).then((response)=>{
  //       let result = response.data
  //       resolve(response)
  //     }, error=>{
  //       reject(error)//接口报错抛出错误信息
  //     })
  //   })
  // }



  // let task = new Observable((observer:any)=>{
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then((response )=>{
  //       observer.next( response.data);
  //       observer.complete();
  //     })
  //     .catch((error)=>{
  //       observer.error( error );
  //     });
  // });
  // task.subscribe({
  //   next(data){ console.log('data:',data);},
  //   error(err){ console.log('something wrong occurred:'+ err);},
  //   complete(){ console.log('done');}
  // });



}






// import { Injectable, Inject } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpResponse, HttpRequest,  HttpParams } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Observable} from 'rxjs';
// import 'rxjs/add/operator/catch';
// import { UserInfoService, LoginInfoInStorage} from '../user-info.service';
// import { AppConfig } from '../../app-config';
//
//
// @Injectable()
// export class ApiRequestService {
//
//     constructor(
//         private appConfig:AppConfig,
//         private http: HttpClient,
//         private router:Router,
//         private userInfoService:UserInfoService
//     ) {}
//
//     /**
//      * This is a Global place to add all the request headers for every REST calls
//      */
//     getHeaders():HttpHeaders {
//         let headers = new HttpHeaders();
//         let token = this.userInfoService.getStoredToken();
//         headers = headers.append('Content-Type', 'application/json');
//         if (token !== null) {
//             headers = headers.append("Authorization", token);
//         }
//         return headers;
//     }
//
//     get(url:string, urlParams?:HttpParams):Observable<any>{
//         let me = this;
//         return this.http.get(this.appConfig.baseApiPath + url, {headers:this.getHeaders(),  params:urlParams} )
//             .catch(function(error:any){
//                 console.log("Some error in catch");
//                 if (error.status === 401 || error.status === 403){
//                     me.router.navigate(['/logout']);
//                 }
//                 return Observable.throw(error || 'Server error')
//             });
//     }
//
//     post(url:string, body:Object):Observable<any>{
//         let me = this;
//         return this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers:this.getHeaders()})
//             .catch(function(error:any){
//                 if (error.status === 401){
//                     me.router.navigate(['/logout']);
//                 }
//                 return Observable.throw(error || 'Server error')
//             });
//     }
//
//     put(url:string, body:Object):Observable<any>{
//         let me = this;
//         return this.http.put(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers:this.getHeaders()})
//             .catch(function(error:any){
//                 if (error.status === 401){
//                     me.router.navigate(['/logout']);
//                 }
//                 return Observable.throw(error || 'Server error')
//             });
//     }
//
//     delete(url:string):Observable<any>{
//         let me = this;
//         return this.http.delete(this.appConfig.baseApiPath + url, { headers:this.getHeaders()})
//             .catch(function(error:any){
//                 if (error.status === 401){
//                     me.router.navigate(['/logout']);
//                 }
//                 return Observable.throw(error || 'Server error')
//             });
//     }
//
// }
