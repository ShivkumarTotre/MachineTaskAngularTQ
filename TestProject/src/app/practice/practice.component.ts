import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/api-services.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit{
  s:any;  

  constructor(private http:ApiServicesService){

  }

  ngOnInit(): void {
    this.getData();
    // this.getDataS();
  }
    
  getData(){

    this.http.postRequest('Demo/getM','').subscribe((data)=>{
    console.log(data);
    this.s=data;
    })
  }

  getDataS(){

    this.http.postRequest('Demo/getS','').subscribe((data)=>{
      console.log(data);
      this.s = data;
    })
  }
}
