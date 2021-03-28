import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  selectedBrand: Brand = { id: 0, name: '' };
  dataLoaded = false;
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  setSelectedBrand(brand: Brand) {
    this.selectedBrand = brand;
  }

  getSelectedBrandClass(brand: Brand) {
    if (this.selectedBrand == brand) {
      return 'list-group-item btn active';
    }
    return 'list-group-item btn';
  }

  resetSelectedBrand() {
    if (this.selectedBrand.id != 0) {
      return 'list-group-item btn';
    }
    return 'list-group-item btn active';
  }
}
