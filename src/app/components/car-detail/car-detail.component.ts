import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/car-image';
import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:Car[] = [];
  carImages:CarImage[] = [];
  dataLoaded:boolean = false;
  imageLoaded:boolean = false;
  constructor(
    private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['carid']){
        this.getCarDetailById(params['carid']);
        this.getCarImagesById(params['carid']);
      }
    })
  }

  getCarDetailById(carId:number){
    this.carDetailService.getCarDetailsByCarId(carId).subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarImagesById(carId:number){
    this.carImageService.getCarImagesById(carId).subscribe(response => {
      this.carImages = response.data;
      this.imageLoaded = true;
    })
  }

}
