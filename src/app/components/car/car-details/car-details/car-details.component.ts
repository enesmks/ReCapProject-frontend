import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  imageRoot= environment.imageUrl;
  constructor(
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  carImages : CarImage[]=[]
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getImages(params["carId"])
      }else{
        this.getAllImages();
      }
    })
  }

  getImages(carId:number){
    this.carImageService.getCarImagesById(carId).subscribe(response=>{
      this.carImages = response.data;
    })
  }

  getAllImages(){
    this.carImageService.getAllImages().subscribe(response=>{
      this.carImages = response.data;
    })
  }

  getSlideClass(index:number){
    if(index==0){
      return "corousel-item text-center active"
    }else{
      return "corousel-item text-center"
    }
  }

  getSlideNumber(index:number){
    return index.toString();
  }

}
