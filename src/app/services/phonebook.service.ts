import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getPhoneBooks(){
    return this.http.get(this.apiUrl);
  }

  getPhoneBookById(id: string){
    return this.http.get(this.apiUrl + "/" + id);
  }
  save(phoneBook: any){
    return this.http.post(this.apiUrl,phoneBook);
  }
  remove(id: string){
    return this.http.post(this.apiUrl + "/entry/" + id + "/delete",{});
  }
}
