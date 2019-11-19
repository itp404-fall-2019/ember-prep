import Service from '@ember/service';

export default class extends Service {
  constructor() {
    super(...arguments);
    this.repos = [];
  }
  add(repo) {    
    this.setProperties({
      repos: this.repos.concat(repo)
    });
  }
}
