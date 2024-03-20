import { Component, OnInit } from '@angular/core';
import { ArrondissementService } from '../service/arrondissement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-arrondissement',
  templateUrl: './edit-arrondissement.component.html',
  styleUrls: ['./edit-arrondissement.component.css']
})
export class EditArrondissementComponent implements OnInit{
  updateAForm:any;
  id: number = this.activatedRoute.snapshot.params['id'];
  constructor(private service:ArrondissementService,private router:Router,private activatedRoute:ActivatedRoute,private fb:FormBuilder){}
  ngOnInit(): void {
    this.updateAForm=this.fb.group({
      nom:['',Validators.required]
    })
    this.getArrondissementById();
  }
getArrondissementById(){
  this.service.getArrondissementById(this.id).subscribe((response)=>{
    this.updateAForm.patchValue(response)
  })
 
}
updateArrondissement(){
    this.service.editArrondissement(this.updateAForm.value,this.id).subscribe((response)=>{
      this.router.navigate(['arrondissement']);
    })
} 
}
