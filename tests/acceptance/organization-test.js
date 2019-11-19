import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { Response } from 'ember-cli-mirage';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | organization', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting an organization', async function(assert) {
    window.server.get('https://api.github.com/orgs/emberjs/members', () => {
      return new Response(200, {}, [
        { avatar_url: 'https://avatars0.githubusercontent.com/u/21772?v=4', login: 'abuiles' },
        { avatar_url: 'https://avatars0.githubusercontent.com/u/21772?v=4', login: 'skaterdav85' },
        { avatar_url: 'https://avatars0.githubusercontent.com/u/21772?v=4', login: 'wykatz' }
      ]);
    });

    await visit('/');
    await click('[data-test="emberjs"]');
    assert.dom('img').exists({ count: 3 });
  });
});
