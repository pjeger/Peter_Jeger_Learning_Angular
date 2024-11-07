import { Injectable } from '@angular/core';
import {catchError, Observable, of, throwError} from "rxjs";
import {smiteTwoGod} from "../Shared/Models/smiteTwoGod";
import {smiteTwoGodList} from "../Shared/mock-smiteTwoGod";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SmiteTwoGodService {
  private apiUrl = 'api/smiteTwoGodList';
  private smiteTwoGods: smiteTwoGod[] = smiteTwoGodList;
  constructor(private http: HttpClient) { }

  //CRUD OPERATIONS
  getSmiteTwoGod(): Observable<smiteTwoGod[]>{
    return this.http.get<smiteTwoGod[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
  getSmiteTwoGodById(id: number): Observable<smiteTwoGod | undefined> {
    return this.http.get<smiteTwoGod>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }
  addSmiteTwoGod(newSmiteTwoGod:smiteTwoGod) : Observable<smiteTwoGod>{
      newSmiteTwoGod.id = this.generateNewId();
      return this.http.post<smiteTwoGod>(this.apiUrl, newSmiteTwoGod).pipe(catchError(this.handleError));
  }
  updateSmiteTwoGods(updatedSmiteTwoGod: smiteTwoGod): Observable<smiteTwoGod | undefined> {
      const url = `${this.apiUrl}/${updatedSmiteTwoGod.id}`;
      return this.http.put<smiteTwoGod>(url, updatedSmiteTwoGod).pipe(catchError(this.handleError));
  }
  deleteSmiteTwoGod(smiteTwoGodId: number): Observable<{}> {
      const url = `${this.apiUrl}/${smiteTwoGodId}`;
      return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewId(): number {
      return this.smiteTwoGods.length > 0 ? Math.max(...this.smiteTwoGods.map(smiteTwoGod => smiteTwoGod.id)) + 1 : 1;
  }
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
