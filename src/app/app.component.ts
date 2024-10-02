import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import {smiteTwoGod} from "./smiteTwoGod"
 import {SmiteGodsListComponent} from "./smite-gods-list/smite-gods-list.component";
import {SmiteGodsListItemComponent} from "./smite-gods-list-item/smite-gods-list-item.component";
import {SmiteTwoGodService} from "./smite-two-god.service";
import {smiteTwoGodList} from "./Shared/Models/mock-smiteTwoGod";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, SmiteGodsListComponent, SmiteGodsListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Hello, my name is Peter';
  constructor(private SmiteTwoGodService: SmiteTwoGodService) {
  }

  protected readonly smiteTwoGodList = smiteTwoGodList;
  smiteTwoGod: smiteTwoGod[] | undefined;
  ngOnInit(): void {
    this.SmiteTwoGodService.getSmiteTwoGodById(1).subscribe((smiteTwoGod) =>{
      this.smiteTwoGod = smiteTwoGod;
    })
  }
}

