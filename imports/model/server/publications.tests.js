import { resetDatabase } from 'meteor/xolvio:cleaner';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import '/imports/test/test-helpers';
import './publications';

describe('instance', function() {
  beforeEach(() => {
    resetDatabase();
  });

  it('should publish 1 instance', function(done) {
    let instance = Factory.create('instance');
    const collector = new PublicationCollector({ userId: faker.random.uuid() });

    collector.collect('instance', (collections) => {
      expect(collections.instance.length).to.eq(1);
      done();
    });
  });

  it('should publish 1 thread', function(done) {
    let userId = faker.random.uuid();
    let thread = Factory.create('thread', {userId, category: 'Account'});
    const collector = new PublicationCollector({ userId });

    collector.collect('instance', (collections) => {
      expect(collections.threads.length).to.eq(1);
      done();
    });
  });
});