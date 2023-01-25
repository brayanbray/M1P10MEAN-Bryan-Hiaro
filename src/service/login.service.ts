import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, mdp: string) {
    return this.http.post(
      '/utilisateur/loginProcess',
      { email, mdp },
      { responseType: 'text' }
    );
  }
}
