import Route from '@ember/routing/route';

export default class OrgsRoute extends Route {
  async model(params) {
    const response = await fetch(`https://api.github.com/orgs/${params.organization}/members`)
    return response.json();
  }
}
