import { Component } from '@angular/core';
import {Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {smiteTwoGod} from "../smiteTwoGod";
import {ActivatedRoute, Router} from "@angular/router";
import {SmiteTwoGodService} from "../Services/smite-two-god.service";
import {smiteTwoGodList} from "../Shared/Models/mock-smiteTwoGod";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent {
  smiteTwoGodForm: FormGroup;
  smiteTwoGod: smiteTwoGod  | undefined;
  error: string             | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private smiteTwoGodService: SmiteTwoGodService,
    private router: Router
  ) {
    this.smiteTwoGodForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      pantheon: ['', Validators.required],
      class: ['', Validators.required],
      releaseDate: ['', Validators.required],
      kitChanges: ['', Validators.required],
      image: ['']
    })
  }

  protected readonly onsubmit = onsubmit;

  onSubmit(): void {
    const smiteTwoGod: smiteTwoGod = this.smiteTwoGodForm.value;
      const newId = this.smiteTwoGodService.generateNewId();
      smiteTwoGod.id = newId;
      this.smiteTwoGodService.addSmiteTwoGod(smiteTwoGod);

    this.router.navigate(['/smiteTwoGods']);
  }
  onEdit(): void {
    const smiteTwoGod: smiteTwoGod = this.smiteTwoGodForm.value;
    this.smiteTwoGodService.updateSmiteTwoGods(smiteTwoGod)
    this.router.navigate(['/smiteTwoGods']);
  }
  onDelete(): void {
    const id = this.smiteTwoGodForm.value.id;
    if (id) {
      this.smiteTwoGodService.deleteSmiteTwoGod(id);
      this.router.navigate(['/smiteTwoGods'])
    }
  }
  navigateToSmiteGodList(): void {
    this.router.navigate(['/smiteTwoGods'])
  }
}
