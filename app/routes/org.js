import Route from '@ember/routing/route';

export default class OrgsRoute extends Route {
  async model(params) {
    const { organization } = params;
    const response = await fetch(`https://api.github.com/orgs/${organization}/members`);
    const users = await response.json();
    return {
      organization,
      users
    };
  }
}
