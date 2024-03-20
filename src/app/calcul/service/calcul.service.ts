import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { IDensite } from '../model/idensite';
import { ICalculTaxeDTO } from '../model/icalcul-taxe-dto';
import { Observable, map } from 'rxjs';
import { IEmailDTO } from '../model/iemail-dto';
import { IProprietaire } from 'src/app/proprietaire/model/iproprietaire';
import { IPDFRequestDTO } from '../model/ipdfrequest-dto';
const BASE_URL = ["http://localhost:8080/"]
@Injectable({
  providedIn: 'root'
})
export class CalculService {
  headers= this.service.createAuhtorizationHeader()
  
  constructor(private http:HttpClient,private service:AuthService) { }
  getAllDensites(){
    return this.http.get<IDensite[]>(BASE_URL+"api/densite",{headers:this.headers!});
  }
  calculTaxe(calculTaxe:ICalculTaxeDTO):Observable<string>{
    return this.http.post(BASE_URL+"api/calcul",calculTaxe,{headers:this.headers!,responseType:'text'});
  }
  sendEmail(mail:IEmailDTO){
    return this.http.post<string>(BASE_URL+"api/email",mail,{headers:this.headers!});
  }

  generatePDF(pdf:IPDFRequestDTO){
    this.headers?.append('Content-Type', 'application/pdf');
    this.headers?.append('Accept', 'application/pdf');
    
    return this.http.post(BASE_URL+"api/pdf",pdf, {headers: this.headers!,
    responseType: 'blob'});
  }
      
}
