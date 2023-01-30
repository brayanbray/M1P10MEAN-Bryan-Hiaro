import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apiService: ApiService) { }

  login(email: string, mdp: string) {
    return this.apiService.post('utilisateur/loginProcess', { email, mdp });
  }
}
