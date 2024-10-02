import { Component } from '@angular/core';
import {smiteTwoGod} from "../smiteTwoGod";
import {SmiteGodsListItemComponent} from "../smite-gods-list-item/smite-gods-list-item.component";
import {NgClass, NgForOf} from "@angular/common";
import {SmiteTwoGodService} from "../smite-two-god.service";

@Component({
  selector: 'app-smite-gods-list',
  standalone: true,
  imports: [
    SmiteGodsListItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './smite-gods-list.component.html',
  styleUrl: './smite-gods-list.component.css'
})

export class SmiteGodsListComponent {
  smiteTwoGodList: smiteTwoGod[] = [];

  constructor (private smiteTwoGodService: SmiteTwoGodService) {
  }

  ngOnInit(): void{
    this.smiteTwoGodService.getSmiteTwoGod().subscribe({
      next: (data: smiteTwoGod[]) => this.smiteTwoGodList = data,
      error: err => console.error("Error fetching Smite Two God", err),
      complete:() => console.log("Smite Two God data fetch complete!")
    })
  }
}

