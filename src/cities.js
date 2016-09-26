export class CityManagement {
  heading = 'City Management';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './cities-list', nav: true, title: 'Cities List' },
      { route: 'create', name: 'create', moduleId: './cities-create', nav: true, title: 'Cities Creation' },
    ]);

    this.router = router;
  }
}
