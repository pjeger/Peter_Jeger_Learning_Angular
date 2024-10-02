import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {smiteTwoGod} from "./smiteTwoGod";
import {NgForOf, NgIf} from "@angular/common";
import {SmiteGodsListComponent} from "./smite-gods-list/smite-gods-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, SmiteGodsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello, my name is Peter';
  paragraph = 'This is my first Javascript Frameworks assignment using Angular and Github, this is very confusing.'
  date = 'September 11, 2024'

}

