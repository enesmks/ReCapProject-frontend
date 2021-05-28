import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = environment.apiUrl;
  path:string = environment.apiUrl + 'carImages/';
  headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private httpClient:HttpClient) { }

  getCarImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = environment.apiUrl + "carImages/getimagesbycarid?carId=" +carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getAllImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carImages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
