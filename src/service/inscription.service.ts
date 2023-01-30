import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private apiService: ApiService) { }
  register(email: string, mdp: string, nom: string) {
    return this.apiService.post('utilisateur/registerProcess', { email, mdp, nom });
  }
}
