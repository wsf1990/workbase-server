import '../channel-users';
import './channels';
import './channel-modal';

ChannelController = ApplicationController.extend({
  template: 'Channels',
  channel() {
    return this.params.channel;
  },
  subscriptions() {
    this.subscribe("channel.threads", this.channel());
    let threadId = this.threadId();
    if (threadId) {
      this.subscribe("thread", threadId);
      this.subscribe("messages", threadId);
    }
  },
  threadId() {
    return this.params._id;
  },
  detail() {
    return this.params.query.detail;
  },
  thread() {
    let threadId = this.threadId();
    return threadId && Threads.findOne(threadId);
  },
  data() {
    return {
      channel: Users.findOne(this.channel()),
      threads: Threads.find({}, {sort: {updatedAt: -1}}),
      thread: this.thread(),
      detail: this.detail()
    };
  }
});

Router.route('/channels/:channel/:_id?', {
  name: 'channel',
  controller: 'ChannelController'
});