import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITerrain } from '../model/iterrain';
import { TerrainService } from '../service/terrain.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITerrainDTO } from '../model/iterrain-dto';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-terrain',
  templateUrl: './edit-terrain.component.html',
  styleUrls: ['./edit-terrain.component.css']
})
export class EditTerrainComponent implements OnInit {
  editTerrainForm!: FormGroup;
  terrain!: ITerrain;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: TerrainService,
    private router: Router,
    private cd: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((parametres) => this.service.getTerrainById(+parametres['id']))
    ).subscribe((terrain) => {
      if (terrain) {
        this.terrain = terrain;

        forkJoin([
          this.service.getProprietaireTerrain(this.terrain.id),
          this.service.getRueTerrain(this.terrain.id)
        ]).subscribe(([proprietaire, rue]) => {
          this.initializeForm(terrain, proprietaire, rue);
          this.cd.detectChanges();
        });
      }
    });
  }

  private initializeForm(terrain: ITerrain, proprietaire: any, rue: any): void {
    this.editTerrainForm = this.formBuilder.group({
      surface: [terrain.surface, Validators.required],
      adresse: [terrain.adresse, Validators.required],
      idProp: [proprietaire, Validators.required],
      idRue: [rue, Validators.required]
    });
  }

  editTerrain(): void {
    if (this.editTerrainForm.invalid) {
      return;
    }

    const values = this.editTerrainForm.value;
    const editedTerrain: ITerrainDTO = {
      surface: values.surface,
      adresse: values.adresse,
    };

    this.service.editTerrain(editedTerrain, values.idProp, values.idRue, this.terrain.id).subscribe(() => {
      this.router.navigate(['terrain']);
    });
  }

  onSubmit(): void {
    this.editTerrain();
  }
}
