import { Component, Input, OnInit } from '@angular/core';
import { Vehicule } from 'app/Models/vehicule';
import { VehiculeResponse } from 'app/Models/vehicule-response';
import { USerServiceService } from 'app/service/user-service.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  @Input() vehiculeDetails = { matriculation: '', brand: '', userId: ''};
  

  public vehicules:VehiculeResponse[];

  constructor(private userService:USerServiceService) { }

  ngOnInit() {
    this.getVehicules();
  }
  
  getVehicules(){
  
    this.userService.getAllVehicules().subscribe(data=>{
      
      this.vehicules=data;
      console.log(this.vehicules);
    })
    
  }
  AddVehicule(){
    
    this.userService.AddVehicule(this.vehiculeDetails).subscribe(data=>{
      console.log("success")

    })


}
}
