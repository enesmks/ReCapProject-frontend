import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
  apiUrl='https://localhost:44361/api/'

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath)
  }
}
