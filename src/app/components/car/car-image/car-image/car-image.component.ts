import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  @Input() car :Car;

  imageRoot = environment.imageUrl;
  carImage:CarImage[]=[];

  carId:number;
  imageFile:any;
  baseUrl = environment.baseUrl;

  constructor(
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
    private formBuilder:FormBuilder,
    private httpClient:HttpClient,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
  }

}
