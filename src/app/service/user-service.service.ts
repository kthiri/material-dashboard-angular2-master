import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/Models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class USerServiceService {

    public userAPI="http://localhost:8080/users";
    public LoginApi="http://localhost:8080/users/login";
    public vehiculeAPI="http://localhost:8080/vehicules";
    public Score_Ecodriving="http://localhost:8080/score/ecodrivingUser";
    public Score_Driving_Behaviour="http://localhost:8080/score/drivingUser";
    public Score_Mixed="http://localhost:8080/score/mixed";

    isAuthenticate: boolean;
    isLogged:boolean;
    



  constructor(private  client:HttpClient) { 
  
  }

  isLoggedUser():Observable<boolean>{
    const logged=localStorage.getItem("logged")
    if(logged==='true'){
      return of(true);
    }
    return of(false);
  }
  loginAdmin(email: string, password: string): Observable<boolean> {
    if (email === 'admin@gmail.com' && password === 'admin') {
      localStorage.setItem("logged","true")
      this.isAuthenticate = true;
      return of(true);
    }
    return of(false);
  }

  public Login(params:any):Observable<any>{
    return this.client.post(this.LoginApi,params)
  }


  public getUsers():Observable<any>{
    return this.client.get<any>(this.userAPI)
  }

  public AddUser(user:any):Observable<any>{
    return this.client.post(this.userAPI,user)
  }

  public getVehicules():Observable<any>{
    return this.client.get<any>(this.vehiculeAPI)
  }
  public AddVehicule(vehicule:any):Observable<any>{
    return this.client.post(this.vehiculeAPI,vehicule)
  }

  public getAllVehicules():Observable<any>{
    return this.client.get<any>(this.vehiculeAPI+'/response')
  }
  
  public getScoreEcodriving():Observable<any>{
    return this.client.get<any>(this.Score_Ecodriving)
  }
  
  public getScoreDriving():Observable<any>{
    return this.client.get<any>(this.Score_Driving_Behaviour)
  }

  public getScoreMixed():Observable<any>{
    return this.client.get<any>(this.Score_Mixed)
  }
  
  
/*
  UpdateAddress(userid:number,user:Customerr): Observable<any>{
    const userUrl = `${this.restUrl}/${userid}`;
    return this.httpClient.patch<Customerr>(userUrl, user); 
  }


  findByEmail(email:string):Observable<any>{
    const find=`${this.restUrl}/search/findByEmail?theEmail=${email}`
    return this.httpClient.get<Customerr>(find);
  }

  AddCustomer(customer:Customerr):Observable<any>{
    return this.httpClient.post<Customerr>(this.restUrl,customer)
  }

  GetCustomerOrder(orderId:any):Observable<any>{
    const orderUrl=`${this.orderRest}/${orderId}/customer`
    return this.httpClient.get<Customerr>(orderUrl)
  }
  */
}
