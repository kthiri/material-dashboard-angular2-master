import { WebRequestService } from './web-request.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: WebRequestService){}
  ngOnInit(): void {
      this.getDataFromAPI();
  }   
  getDataFromAPI(){
    this.service.getData().subscribe((response)=>{
      console.log('Response : ',response)
    }, (error)=>{
      console.log('Error is ',error);
    })
  }
}
