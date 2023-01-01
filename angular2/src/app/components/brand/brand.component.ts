import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { BrandModel } from 'src/app/model/brand.model';
import { BrandService } from 'src/app/service/brand.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit{
  form!: FormGroup;
  brands!: BrandModel[];

  constructor(private fb : FormBuilder , private brandService : BrandService){}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['']
    });

    this.brandService.getAllBrand().subscribe(brs => {
      this.brands=brs;
    });

  }

  public createBrand(){
    console.log("work");
    // console.log(this.form.value);
    this.brandService.saveBrand(this.form.value).subscribe(brand =>{
      console.log(brand);
   });
  }

}
