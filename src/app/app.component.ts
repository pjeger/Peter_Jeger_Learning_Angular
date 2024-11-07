import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {smiteTwoGod} from "./Shared/Models/smiteTwoGod"
 import {SmiteGodsListComponent} from "./smite-gods-list/smite-gods-list.component";
import {SmiteGodsListItemComponent} from "./smite-gods-list-item/smite-gods-list-item.component";
import {SmiteTwoGodService} from "./Services/smite-two-god.service";
import {smiteTwoGodList} from "./Shared/mock-smiteTwoGod";

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
  constructor(private smiteTwoGodService: SmiteTwoGodService) {
  }

  smiteTwoGod: smiteTwoGod | undefined;

  ngOnInit() {
    this.smiteTwoGodService.getSmiteTwoGodById(0).subscribe((smiteTwoGod) =>{
      this.smiteTwoGod = smiteTwoGod;
    })
  }

}


