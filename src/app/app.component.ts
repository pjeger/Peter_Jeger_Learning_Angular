import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {smiteTwoGod} from "./smiteTwoGod";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello, my name is Peter';
  paragraph = 'This is my first Javascript Frameworks assignment using Angular and Github, this is very confusing.'
  date = 'September 11, 2024'

  smiteTwoGod1 : smiteTwoGod = {name: "Fenrir", pantheon: "Norse", class: "Assassin", kitChanges: true, releaseDate: "27/08/2024"}
  smiteTwoGod2 : smiteTwoGod = {name: "Bacchus", pantheon: "Roman", class: "Guardian", kitChanges: true, releaseDate: "27/08/2024"}
  smiteTwoGod3 : smiteTwoGod = {name: "Neith", pantheon: "Egyptian", class: "Hunter", kitChanges: true, releaseDate: "27/08/2024"}
  smiteTwoGod4 : smiteTwoGod = {name: "Nu Wa", pantheon: "Chinese", class: "Mage", kitChanges: true, releaseDate: "17/09/2024"}
  smiteTwoGod5 : smiteTwoGod = {name: "Amaterasu", pantheon: "Shinto", class: "Warrior", kitChanges: false, releaseDate: "17/09/2024"}
  smiteTwoGod6 : smiteTwoGod = {name: "Zeus", pantheon: "Greek", class: "Mage", kitChanges: true, releaseDate: "27/08/2024"}

  smiteTwoGodList: smiteTwoGod[] =
    [this.smiteTwoGod1, this.smiteTwoGod2, this.smiteTwoGod3, this.smiteTwoGod4, this.smiteTwoGod5, this.smiteTwoGod6]
}
