import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }

  sendMails(body){
    return this.http.post ('/contact', body, {
      headers: new HttpHeaders ({'Content-Type': 'application/json'}),
      responseType: 'text',
    });
  }
}
