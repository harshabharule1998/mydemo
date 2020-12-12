import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:4000/category'
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getCatgories() {
    return this.httpClient.get(this.url)
  }

  addCategory(title: string, description: string) {
    const body = {
      title: title,
      description: description
    }

    return this.httpClient.post(this.url, body)
  }
  
}
