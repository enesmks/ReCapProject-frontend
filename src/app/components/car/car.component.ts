import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  currentBrand:Brand;
  brands:Brand[]=[];
  carImages:CarImage[]=[];
  imageUrl=environment.baseUrl;
  dataLoaded=false;
  imageRoot = environment.imageUrl;
  imageFile:any;


  constructor(
    private carService:CarService,
    private brandService:BrandService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.getCars();
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImages(params["carId"])
      }else{
        this.getAllCarImages()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
      console.log(this.cars);
    })
  }
  
  getAllCarImages(){
    this.carImageService.getAllImages().subscribe(response=>{
      this.carImages = response.data;
    })
  }

  getCarImages(carId:number){
    this.carImageService.getCarImagesById(carId).subscribe(response=>{
      this.carImages = response.data;
      this.dataLoaded = true;
    })
  }
  goToCarDetails(){
    this.router.navigateByUrl('/carDetails')
  }

  getSlideClass(index:number){
    if(index == 0){
      return "carousel-item text-center active";
    } else {
      return "carousel-item text-center";
    }
  }
  getSlideNumber(index:Number){
    return index.toString();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    })
  }


}
