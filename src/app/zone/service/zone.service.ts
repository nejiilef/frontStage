import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IZone } from '../model/izone';
import { IRue } from 'src/app/rue/model/irue';
import { IZoneDTO } from '../model/izone-dto';
import { IArrondissement } from 'src/app/arrondissement/model/iarrondissement';
import { AuthService } from 'src/app/auth/service/auth.service';
const BASE_URL = ["http://localhost:8080/"]
@Injectable({
  providedIn: 'root'
})
export class ZoneService {

    headers= this.service.createAuhtorizationHeader()
  
zones!:IZone[];
  constructor(private http:HttpClient,private service:AuthService) { }
  getAllZones():Observable<IZone[]>{
    console.log(this.headers)
       return this.http.get<IZone[]>(BASE_URL+"api/zone",{headers:this.headers!});
  }
  getAllRuesZone(id:number):Observable<IRue[]>{
    return this.http.get<IRue[]>(BASE_URL+"api/zone/"+id,{headers:this.headers!});
  }
  addZone(z:IZoneDTO,idArrondissement:number):Observable<IZoneDTO>{
    return this.http.post<IZoneDTO>(BASE_URL + "api/zone/"+idArrondissement,z,{headers:this.headers!});
  }
  deleteZone(id: number) {
    return this.http.delete(BASE_URL + "api/zone/" + id, { headers: this.headers!, responseType: 'text' });
  }
  getZoneById(id:number):Observable<IArrondissement|null>{
    return this.getAllZones().pipe(
      map(zones=>{
        this.zones=zones;
        return this.zones.find(z=>z.id==id)||null;
      })
    )
  }
  editZone(z:IZoneDTO,id:number){
    return this.http.put(BASE_URL+"api/zone/"+id,z,{headers:this.headers!});
  }
  
}
