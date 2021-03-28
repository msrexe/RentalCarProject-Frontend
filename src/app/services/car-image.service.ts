import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/car-image';
import { ListResponseModel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:44334/api/';

  constructor(private httpClient: HttpClient) {}

  getCarImagesById(carId:number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getimagesbycarid?id=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
