import { Component, Input, OnInit } from '@angular/core';
import {smiteTwoGod} from "../Shared/Models/smiteTwoGod";
import {SmiteGodsListItemComponent} from "../smite-gods-list-item/smite-gods-list-item.component";
import {NgClass, NgForOf} from "@angular/common";
import {SmiteTwoGodService} from "../Services/smite-two-god.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-smite-gods-list',
  templateUrl: './smite-gods-list.component.html',
  standalone: true,
  imports: [
    SmiteGodsListItemComponent,
    NgForOf,
    NgClass,
  ],
  styleUrl: './smite-gods-list.component.css'
})

export class SmiteGodsListComponent implements OnInit{
  smiteTwoGodList: smiteTwoGod[] = [];
  error: string | null = null;

  constructor(
    private smiteTwoGodService: SmiteTwoGodService,
    private router: Router
  ){
  }

  ngOnInit() {
    //This lifecycle hook is a good place to fetch and init our data
    this.smiteTwoGodService.getSmiteTwoGod().subscribe({
      next: (data: smiteTwoGod[]) => {
        this.smiteTwoGodList = data;
        this.error = null;
      },
      error: err => {
        this.error = 'Error fetching Smite God';
        console.error("Error fetching Smite God", err);
      },
      complete: () => console.log("Smite God data fetch complete!")
    });
  }

  delete(id?: number): void {
    console.log(id)
    for (let i=0;i<=this.smiteTwoGodList.length;i++){
      if ((this.smiteTwoGodList)[i].id == id){
        this.smiteTwoGodList.splice(i, 1);
      }
    }
  }

  edit(): void {
    this.router.navigate(['/modify-list-item']);
  }
}

