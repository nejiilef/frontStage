import { Component } from '@angular/core';
import { ZoneService } from '../service/zone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { IArrondissement } from 'src/app/arrondissement/model/iarrondissement';
import { ArrondissementService } from 'src/app/arrondissement/service/arrondissement.service';

@Component({
  selector: 'app-edit-zone',
  templateUrl: './edit-zone.component.html',
  styleUrls: ['./edit-zone.component.css']
})
export class EditZoneComponent {
  updateZForm:any;
  arrondissements!:IArrondissement[];
  id: number = this.activatedRoute.snapshot.params['id'];
  selectedArrondissement!: IArrondissement;
  constructor(private service:ZoneService,private router:Router,private activatedRoute:ActivatedRoute,private fb:FormBuilder,private serviceArrondissement:ArrondissementService){}
  ngOnInit(): void {
    this.updateZForm=this.fb.group({
      nom:['',Validators.required]
    })
    this.getZoneById();
}
getZoneById(){
  this.service.getZoneById(this.id).subscribe((response)=>{
    this.updateZForm.patchValue(response)
  })
}
updateZone(){
  this.service.editZone(this.updateZForm.value,this.id).subscribe((response)=>{
    this.router.navigate(['zone']);
  })
}

}
