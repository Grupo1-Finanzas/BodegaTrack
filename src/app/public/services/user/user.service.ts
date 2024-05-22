import { HttpClient } from '@angular/common/http';
import {Observable, of, switchMap} from 'rxjs';
import {map} from "rxjs";
import {LoginRequest} from "../login/login.service";
import {User} from "../../models/user/user.model";
export class UserService {
  private baseURL = 'http://localhost:4200'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  checkUserExists(username: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.baseURL}/users`).pipe(
      map(users => users.find(user => user.username === username) !== undefined)
    );
  }

  login(credentials: LoginRequest): Observable<any> {
    return this.http.get<User[]>('assets/data.json').pipe(
        switchMap(data => {
          const users = data['users']; // Access users array
          const user = users.find((u: User) => u.email === credentials.email && u.password === credentials.password);

          if (user) {
            return of(user); // Simulate login success
          } else {
            return of(null); // Simulate incorrect credentials
          }
        })
    );
  }
}
