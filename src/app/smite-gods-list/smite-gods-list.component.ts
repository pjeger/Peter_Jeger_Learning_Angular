import { Component } from '@angular/core';
import {smiteTwoGod} from "../smiteTwoGod";
import {SmiteGodsListItemComponent} from "../smite-gods-list-item/smite-gods-list-item.component";
import {NgClass, NgForOf} from "@angular/common";

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

  smiteTwoGod3 : smiteTwoGod = {name: "Neith", pantheon: "Egyptian", class: "Hunter", kitChanges: true, releaseDate: "27/08/2024"}
  smiteTwoGod4 : smiteTwoGod = {name: "Nu Wa", pantheon: "Chinese", class: "Mage", kitChanges: true, releaseDate: "17/09/2024"}
  smiteTwoGod5 : smiteTwoGod = {name: "Amaterasu", pantheon: "Shinto", class: "Warrior", kitChanges: false, releaseDate: "17/09/2024"}
  smiteTwoGod6 : smiteTwoGod = {name: "Zeus", pantheon: "Greek", class: "Mage", kitChanges: true, releaseDate: "27/08/2024"}

  smiteTwoGodList: smiteTwoGod[] = [this.smiteTwoGod3, this.smiteTwoGod4, this.smiteTwoGod5, this.smiteTwoGod6];
}

