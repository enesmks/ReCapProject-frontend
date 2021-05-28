import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }
  apiUrl='https://localhost:44361/api/'

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/cardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
