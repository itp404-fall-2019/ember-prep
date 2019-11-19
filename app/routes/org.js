import Route from '@ember/routing/route';

export default class OrgsRoute extends Route {
  model(params) {
    console.log(params);
    return params.organization;
  }
}
