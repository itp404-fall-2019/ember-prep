import Route from '@ember/routing/route';

export default class extends Route {
  async model(params) {
    const response = await fetch(`https://api.github.com/users/${params.login}/repos`);
    return response.json();
  }
}
