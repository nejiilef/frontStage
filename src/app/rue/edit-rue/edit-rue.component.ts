import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RueService } from '../service/rue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-rue',
  templateUrl: './edit-rue.component.html',
  styleUrls: ['./edit-rue.component.css']
})
export class EditRueComponent implements OnInit{
  updateRForm:any;
  id: number = this.activatedRoute.snapshot.params['id'];
  constructor(private service:RueService,private router:Router,private activatedRoute:ActivatedRoute,private fb:FormBuilder){}
  ngOnInit(): void {
    this.updateRForm=this.fb.group({
      nom:['',Validators.required]
    })
    this.getRueById();
  }
  getRueById(){
    this.service.getRueById(this.id).subscribe((response)=>{
      this.updateRForm.patchValue(response);
    })
  }
  updateRue(){
    this.service.editRue(this.id,this.updateRForm.value).subscribe((response)=>{
      this.router.navigate(['rue']);
    })
  }

}
