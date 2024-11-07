import {Component, Input} from '@angular/core';
import {smiteTwoGod} from "../Shared/Models/smiteTwoGod";
import {NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {SmiteTwoGodService} from "../Services/smite-two-god.service";
import {smiteTwoGodList} from "../Shared/mock-smiteTwoGod";


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

  smiteTwoGodList: smiteTwoGod[] = [];
  error: string | null = null;
  currentIndex: number = 0;
  @Input() smiteTwoGod!: smiteTwoGod;
  constructor(
    private SmiteTwoGodService: SmiteTwoGodService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    //This lifecycle hook is a good place to fetch and init our data
    this.SmiteTwoGodService.getSmiteTwoGod().subscribe({
      next: (data: smiteTwoGod[]) => {
        this.smiteTwoGodList = data;
        this.error = null;

        // Subscribe to paramMap changes to update the page view
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.smiteTwoGodList.findIndex(smiteTwoGod => smiteTwoGod.id === id);
            this.smiteTwoGod = this.smiteTwoGodList[this.currentIndex];
          }
        });
      },
      error: err => {
        this.error = 'Error fetching Smite God';
        console.error("Error fetching Smite God", err);
      },
      complete: () => console.log("Smite God data fetch complete!")
    });
  }

  onDelete(id?: number): void {
    console.log(id)
    for (let i=0;i<=smiteTwoGodList.length;i++){
      if (smiteTwoGodList[i].id == id){
        smiteTwoGodList.splice(i, 1);
      }
    }
  }

  onEdit(): void {
    this.router.navigate(['/modify-list-item']);
  }

}
