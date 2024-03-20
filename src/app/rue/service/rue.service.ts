import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IRue } from '../model/irue';
import { ITerrain } from 'src/app/terrain/model/iterrain';
import { IRueDTO } from '../model/irue-dto';
import { AuthService } from 'src/app/auth/service/auth.service';
const BASE_URL = ["http://localhost:8080/"]
@Injectable({
  providedIn: 'root'
})
export class RueService {
  headers= this.service.createAuhtorizationHeader()
rues!:IRue[];
  constructor(private http:HttpClient,private service:AuthService) { }
  getAllRues():Observable<IRue[]>{
    return this.http.get<IRue[]>(BASE_URL + "api/rue",{headers:this.headers!});
  }
getAllTerrainsRue(id:number){
  return this.http.get<ITerrain[]>(BASE_URL+"/api/rue/"+id,{headers:this.headers!});
}
addRue(rue : IRueDTO,id:number){
  return this.http.post(BASE_URL +"api/rue/"+id, rue,{headers:this.headers!});
}
deleteRue(id:number){
  return this.http.delete(BASE_URL + "api/rue/" + id,{ headers: this.headers!, responseType: 'text' });
}
editRue(id:number,rue:IRueDTO){
  return this.http.put(BASE_URL+"api/rue/"+id,rue,{headers:this.headers!});
}
getRueById(id:number){
  return this.getAllRues().pipe(
    map(
      rues=>{
        this.rues=rues;
        return this.rues.find(r=>r.id==id)
      }
    )
  )
}
}
