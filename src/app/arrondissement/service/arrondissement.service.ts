import { Injectable } from '@angular/core';
import { IArrondissement } from '../model/iarrondissement';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IZone } from 'src/app/zone/model/izone';
import { IArrondissementDTO } from '../model/iarrondissement-dto';
import { AuthService } from 'src/app/auth/service/auth.service';

const BASE_URL = ["http://localhost:8080/"]
@Injectable({
  providedIn: 'root'
})
export class ArrondissementService {
  headers= this.service.createAuhtorizationHeader()
  
arrondissements!:IArrondissement[];
  constructor(private http:HttpClient,private service:AuthService) { }
  getAllArrondissements():Observable<IArrondissement[]>{
    return this.http.get<IArrondissement[]>(BASE_URL+'api/arrondissement',{headers:this.headers!});
  }
  getAllZonesArrondissement(id:number):Observable<IZone[]>{
    return this.http.get<IZone[]>(BASE_URL+"api/arrondissement/"+id,{headers:this.headers!});
  }
  addArrondissement(a:IArrondissementDTO):Observable<IArrondissementDTO> {
    return this.http.post<IArrondissementDTO>(BASE_URL + "api/arrondissement", a,{headers:this.headers!});
  }
  editArrondissement(a:IArrondissementDTO,id:number):Observable<IArrondissementDTO>{
    return this.http.put<IArrondissementDTO>(BASE_URL + 'api/arrondissement/' + id, a,{headers:this.headers!});
  }
  deleteArrondissement(id:number):Observable<string>{
    return this.http.delete(BASE_URL+"api/arrondissement/"+id, { headers: this.headers!, responseType: 'text' });
  }
  getArrondissementById(id:number):Observable<IArrondissement|null>{
    return this.getAllArrondissements().pipe(
      map(arrondissements=>{
        this.arrondissements=arrondissements;
        return this.arrondissements.find(x => x.id == id)||null;
      })
    );
  }
}
