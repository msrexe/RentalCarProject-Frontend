import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = 'https://localhost:44334/api/';

  constructor(private httpClient: HttpClient) {}

  getCarDetailsByCarId(carId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetailsbycarid?id=' + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
