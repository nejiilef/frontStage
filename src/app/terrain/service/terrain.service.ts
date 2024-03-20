import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ITerrain } from '../model/iterrain';
import { ITerrainDTO } from '../model/iterrain-dto';
import { RueService } from 'src/app/rue/service/rue.service';
import { ZoneService } from 'src/app/zone/service/zone.service';
import { ArrondissementService } from 'src/app/arrondissement/service/arrondissement.service';
import { AuthService } from 'src/app/auth/service/auth.service';
const BASE_URL = ["http://localhost:8080/"]

@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  headers= this.service.createAuhtorizationHeader()
  
terrains!:ITerrain[]
  constructor(private http:HttpClient,private service:AuthService) { }
  getAllTerrains():Observable<ITerrain[]>{
    return this.http.get<ITerrain[]>(BASE_URL+"api/terrain",{headers:this.headers!});
  }
  editTerrain(nouveauTerrain: ITerrainDTO,idProp:number,idRue:number,id:number){
    return this.http.put<ITerrainDTO>(BASE_URL + 'api/terrain/'+idProp+"/"+idRue+"/"+id, nouveauTerrain,{headers:this.headers!})
  }
  deleteTerrain(id: number): Observable<string> {
    return this.http.delete(BASE_URL + 'api/terrain/' + id, { headers: this.headers!, responseType: 'text' });
  }
  addTerrain(nouveauTerrain:ITerrainDTO,idProp:number,idRue:number){
    return this.http.post<ITerrainDTO>(BASE_URL+'api/terrain/'+idProp+"/"+idRue,nouveauTerrain,{headers:this.headers!});
  }
  getTerrainById(id:number){
    return this.getAllTerrains().pipe(
      map(terrains=>{
        this.terrains=terrains;
        return terrains.find(t => t.id==id)||null;
      })
    )
  }
  getProprietaireTerrain(id:number ):Observable<Object>{
 return this.http.get(BASE_URL+"api/terrain/prop/"+id,{headers:this.headers!});

  }
  getRueTerrain(id:number){
    return this.http.get(BASE_URL+"api/terrain/rue/"+id,{headers:this.headers!});
  }
 
  



}
