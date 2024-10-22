import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {smiteTwoGod} from "./smiteTwoGod"
 import {SmiteGodsListComponent} from "./smite-gods-list/smite-gods-list.component";
import {SmiteGodsListItemComponent} from "./smite-gods-list-item/smite-gods-list-item.component";
import {SmiteTwoGodService} from "./Services/smite-two-god.service";
import {smiteTwoGodList} from "./Shared/Models/mock-smiteTwoGod";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, SmiteGodsListComponent, SmiteGodsListItemComponent, NgClass, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  /*
  constructor(private SmiteTwoGodService: SmiteTwoGodService) {
  }

  protected readonly smiteTwoGodList = smiteTwoGodList;

  smiteTwoGod: smiteTwoGod[] | undefined;
  ngOnInit(): void {
    this.SmiteTwoGodService.getSmiteTwoGodById(id).subscribe((smiteTwoGod) =>{
      this.smiteTwoGod = smiteTwoGod;
    })
  }
*/
  selectedGod: smiteTwoGod | undefined;
  constructor(private smiteTwoGodService: SmiteTwoGodService) {
  }

  ngOnInit() {
    this.getSelectedGod(2);
  }

  getSelectedGod(id:number): void{
    this.smiteTwoGodService.getSmiteTwoGodById(id).subscribe({
      next: (god) => this.selectedGod = god,
      error: err => console.error("Error fetching god by ID", err)
    });
  }

  /* CLASS EXAMPLE
  user = {
    name: '',
    email: ''
  };

  onSubmit(form: any){
    if(form.valid){
      console.log("Form Submitted Successfully", this.user);
    }
    else {
      console.log("Form is not valid");
    }
  }
   */

}


