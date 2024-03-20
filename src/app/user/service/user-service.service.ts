import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../model/iuser';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
const BASE_URL = ["http://localhost:8080/"]
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  headers= this.service.createAuhtorizationHeader()
  constructor(private http:HttpClient,private service:AuthService) { }
   users:IUser[]=[
    {id:1,password:'John Doe',email:'john.doe'}
   ]
   
  getAllUsers():IUser[]{

    return [...this.users];
  }
  logout(){
    localStorage.removeItem('jwt');
    
  }
  
}
