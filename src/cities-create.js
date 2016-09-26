import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

// polyfill fetch client conditionally
const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

@inject(Lazy.of(HttpClient))
export class Welcome {
  cityName = '';

  constructor(getHttpClient) {
    this.getHttpClient = getHttpClient;
  }

  submit() {
    const http = this.http = this.getHttpClient();

    http.configure(config => {
      config
        .withDefaults({
            credentials: 'same-origin',
            headers: {
                mode: 'cors',
                'Accept': 'application/json',
                'X-Requested-With': 'Fetch'
            }
        })
        .withBaseUrl('http://localhost:8080/');
    });

    http.fetch('cities', {
        method: 'post',
        body: this.cityName
      })
      .then(response => {
        alert('The city was successfully saved');
      });
  }
}
