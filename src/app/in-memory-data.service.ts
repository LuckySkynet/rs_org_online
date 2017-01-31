import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      { id: 11, username: 'Mr. Nice', password:'12345678'},
      { id: 12, username: 'Narco', password:'12345678'},
      { id: 13, username: 'Bombasto', password:'12345678'},
      { id: 14, username: 'Celeritas', password:'12345678'},
      { id: 15, username: 'Magneta', password:'12345678'},
      { id: 16, username: 'RubberMan', password:'12345678'},
      { id: 17, username: 'Dynama', password:'12345678'},
      { id: 18, username: 'Dr IQ', password:'12345678'},
      { id: 19, username: 'Magma', password:'12345678'},
      { id: 20, username: 'SkyNet', password:'12345678'}
    ];
    return { users };
  }
}
