import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProprietaire } from '../model/iproprietaire';
import { IProprietaireDTO } from '../model/iproprietaire-dto';
import { AuthService } from 'src/app/auth/service/auth.service';

const BASE_URL = ["http://localhost:8080/"]

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {
  headers= this.service.createAuhtorizationHeader()
proprietaires!:IProprietaire[];
  constructor(private http:HttpClient,private service:AuthService) { }
  getPropById(id: number): Observable<IProprietaire | null> {
    return this.getAllProprietaires().pipe(
      map(proprietaires => {
        this.proprietaires = proprietaires;
        console.log(this.proprietaires);
        return this.proprietaires.find(p => p.id === id) || null;
      })
    );
  }
  deleteProprietaire(id: number): Observable<string> {
    return this.http.delete(BASE_URL+'api/proprietaire/' + id, { headers: this.headers!, responseType: 'text' });
  }
  getAllProprietaires():Observable<IProprietaire[]>{
    return this.http.get<IProprietaire[]>(BASE_URL+'api/proprietaire',{headers:this.headers!});
  }
  addProprietaire(nouveauProprietaire: IProprietaireDTO): Observable<IProprietaire> {
       return this.http.post<IProprietaire>(BASE_URL + 'api/proprietaire', nouveauProprietaire,{headers:this.headers!});
  }
  editProprietaire(nouveauProprietaire: IProprietaireDTO,idProp:number){
    return this.http.put<IProprietaireDTO>(BASE_URL + 'api/proprietaire/'+idProp, nouveauProprietaire,{headers:this.headers!})
  }
  
}
