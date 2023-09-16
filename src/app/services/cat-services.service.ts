import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Cat } from "../models/cat";



@Injectable({
  providedIn: 'root'
})
export class CatServicesService {
  baseUrl: string = environment.baseURL;
  constructor(private http:HttpClient) {}

  getAllCats(){
    console.log(this.baseUrl);
    return this.http.get<Cat>(`${this.baseUrl}`)
  }
}
