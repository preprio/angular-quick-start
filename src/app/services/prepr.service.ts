import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PreprService {

  async fetchData(query: string, variables?: any): Promise<any> {
    const response = await fetch(environment.PREPR_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query, variables }),
    });

    return response.json();
  }
}