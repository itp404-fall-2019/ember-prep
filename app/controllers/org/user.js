import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  favoriteRepos: service(),
  actions: {
    addToFavorites(repo) {
      this.favoriteRepos.add(repo);
    }
  }
});
