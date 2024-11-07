import { Component } from '@angular/core';
import {Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {smiteTwoGod} from "../Shared/Models/smiteTwoGod";
import {ActivatedRoute, Router} from "@angular/router";
import {SmiteTwoGodService} from "../Services/smite-two-god.service";
import {smiteTwoGodList} from "../Shared/mock-smiteTwoGod";

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
      kitChanges: [''],
      image: ['']
    })
  }

  protected readonly onsubmit = onsubmit;

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      //if the ID is valid, the StudentService is used to fetch the student's details by calling the getStudentById method
      this.smiteTwoGodService.getSmiteTwoGodById(id).subscribe( {
        next: smiteTwoGod => {
          if (smiteTwoGod) {

            this.smiteTwoGodForm.patchValue(smiteTwoGod);
          }
        },
        error: err => {
          this.error = 'Error fetching smite god';
          console.error('Error fetching smite god:', err);
        }
      });
    }
  }
  onSubmit(): void {
    if (this.smiteTwoGodForm.valid) {
      //Iff the form is valid, it extracts the form values into a student object of type User
      const smiteTwoGod: smiteTwoGod = this.smiteTwoGodForm.value;
      /*
      Here we have a little bit of logic, first iff the student.id
      and just being updated

      if it does not exist, we know that the student is new and we need to add it to the list
       */
      if (smiteTwoGod.id) {
        this.smiteTwoGodService.updateSmiteTwoGods(smiteTwoGod).subscribe(() => this.router.navigate(['/smiteTwoGods']));
      } else {
        smiteTwoGod.id = this.smiteTwoGodService.generateNewId();
        this.smiteTwoGodService.addSmiteTwoGod(smiteTwoGod).subscribe(() => this.router.navigate(['/smiteTwoGods']));
      }
    }
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
