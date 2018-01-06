export class App {
  configureRouter(config, router){
    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: 'account-balance',   title: 'Home'},
      { route: 'transactions/:id',  moduleId: 'transactions', name:'transactions' }
    ]);

    this.router = router;
  }
}