import {Component, Input} from '@angular/core';
import {smiteTwoGod} from "../smiteTwoGod";
import {NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {SmiteTwoGodService} from "../Services/smite-two-god.service";
import {smiteTwoGodList} from "../Shared/Models/mock-smiteTwoGod";


@Component({
  selector: 'app-smite-gods-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './smite-gods-list-item.component.html',
  styleUrl: './smite-gods-list-item.component.css'
})
export class SmiteGodsListItemComponent {
  @Input() smiteTwoGod!: smiteTwoGod;
  constructor(private SmiteTwoGodService: SmiteTwoGodService, private router: Router) {
  }

  onEdit(): void {
    this.router.navigate(['/modify-list-item'])
  }
  onDelete(id?: number): void {
    console.log(id)
    for (let i=0;i<=smiteTwoGodList.length;i++){
      if (smiteTwoGodList[i].id == id){
        smiteTwoGodList.splice(i, 1);
      }
    }
  }

}
