import {Component, Input} from '@angular/core';
import {smiteTwoGod} from "../smiteTwoGod";

@Component({
  selector: 'app-smite-gods-list-item',
  standalone: true,
  imports: [],
  templateUrl: './smite-gods-list-item.component.html',
  styleUrl: './smite-gods-list-item.component.css'
})
export class SmiteGodsListItemComponent {
  @Input() smiteTwoGod?: smiteTwoGod;
  smiteTwoGodList: any;
}
