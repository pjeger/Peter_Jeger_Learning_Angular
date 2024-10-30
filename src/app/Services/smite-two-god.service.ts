import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {smiteTwoGod} from "../smiteTwoGod";
import {smiteTwoGodList} from "../Shared/Models/mock-smiteTwoGod";

@Injectable({
  providedIn: 'root'
})
export class SmiteTwoGodService {

  private smiteTwoGods: smiteTwoGod[] = smiteTwoGodList;

  constructor() { }

  //CRUD OPERATIONS
getSmiteTwoGod(): Observable<smiteTwoGod[]>{
  return of(this.smiteTwoGods);
}
addSmiteTwoGod(newSmiteTwoGod:smiteTwoGod) : Observable<smiteTwoGod>{
    this.smiteTwoGods.push(newSmiteTwoGod)
    return of(newSmiteTwoGod);
}
updateSmiteTwoGods(updatedSmiteTwoGod:smiteTwoGod): Observable<smiteTwoGod | undefined> {
    const index = this.smiteTwoGods.findIndex(smiteTwoGod => smiteTwoGod.id == updatedSmiteTwoGod.id)
    if (index > -1){
      this.smiteTwoGods[index] = updatedSmiteTwoGod;
      return of(updatedSmiteTwoGod);
    }
    return of(updatedSmiteTwoGod);
}
deleteSmiteTwoGod(smiteTwoGodId: number): void {
    this.smiteTwoGods = this.smiteTwoGods.filter((smiteTwoGod => smiteTwoGod.id !== smiteTwoGodId))
}
getSmiteTwoGodById(smiteTwoGodId: number): Observable<smiteTwoGod | undefined> {
    return of(this.smiteTwoGods.find(smiteTwoGod => smiteTwoGod.id === smiteTwoGodId))
}
generateNewId(): number {
    return this.smiteTwoGods.length > 0 ? Math.max(...this.smiteTwoGods.map(smiteTwoGod => smiteTwoGod.id)) + 1 : 1;
}
}
