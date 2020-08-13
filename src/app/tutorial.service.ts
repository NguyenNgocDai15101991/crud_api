import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private https: HttpClient) { }

  getAll(): Observable<any> {
    return this.https.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.https.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.https.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.https.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.https.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.https.delete(baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this.https.get(`${baseUrl}?title=${title}`);
  }
}
