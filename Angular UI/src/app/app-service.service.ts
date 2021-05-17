import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private subject = new Subject<any>()

  constructor(private http: HttpClient) { }
  getData(input: string) {
    return this.http.get(`/api/sendData?input=${input}`)
  }

  sendClickEvent() {
    this.subject.next();
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable()
  }
}
