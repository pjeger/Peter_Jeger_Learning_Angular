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

getSmiteTwoGod(): Observable<smiteTwoGod[]>{
  return of(smiteTwoGodList);
}
addSmiteTwoGod(newSmiteTwoGod:smiteTwoGod) : Observable<smiteTwoGod[]>{
    this.smiteTwoGods.push(newSmiteTwoGod)
    return of(this.smiteTwoGods);
}
updateSmiteTwoGods(updatedSmiteTwoGod:smiteTwoGod): Observable<smiteTwoGod[]> {
    const index = this.smiteTwoGods.findIndex((smiteTwoGod) => smiteTwoGod.id == updatedSmiteTwoGod.id)
    if (index !== -1){
      this.smiteTwoGods[index] = updatedSmiteTwoGod;
    }
    return of(this.smiteTwoGods);
}
deleteSmiteTwoGod(smiteTwoGodId: number): Observable<smiteTwoGod[]> {
    this.smiteTwoGods = this.smiteTwoGods.filter(smiteTwoGod => smiteTwoGod.id !== smiteTwoGodId);
    return of(this.smiteTwoGods);
}
getSmiteTwoGodById(smiteTwoGodId: number): Observable<smiteTwoGod | undefined> {
    const smiteTwoGod = this.smiteTwoGods.find(smiteTwoGod2 => smiteTwoGod2.id == smiteTwoGodId);
    return of(smiteTwoGod)
}
}
