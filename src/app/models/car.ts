import { CarImage } from "./carImage";

export interface Car{
    carId:number;
    brandId:number;
    colarId:number;
    imageId:number;
    modelYear:number;
    dailyPrice:number;
    description:string;
    carName:string;
    colarName:string;
    brandName:string;
    date:Date;
    imagePath:string;
}