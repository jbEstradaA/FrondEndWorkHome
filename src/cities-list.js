import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

// polyfill fetch client conditionally
const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

@inject(Lazy.of(HttpClient))
export class CitiesList {
  heading = 'Cities List';
  countries = [];

  constructor(getHttpClient) {
    this.getHttpClient = getHttpClient;
  }

  async activate() {
    // ensure fetch is polyfilled before we create the http client
    await fetch;
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

    http.fetch('cities')
      .then(response => response.json())
      .then(data => {
        this.cities = data.list;
      });
  }
}
