import '../';
import './hooks';
import './functions';
import './methods';
import './publications';

Meteor.startup(function() {
  Users._ensureIndex({"profile.type": 1});
  Users._ensureIndex({"profile.name": 1});
  Users._ensureIndex({"profile.noreply": 1});
  Threads._ensureIndex({category: 1});
  ThreadUsers._ensureIndex({category: 1});
  ThreadUsers._ensureIndex({scope: 1});
  ThreadUsers._ensureIndex({threadId: 1});
  ThreadUsers._ensureIndex({userType: 1});
  ThreadUsers._ensureIndex({userId: 1});
  ThreadUsers._ensureIndex({read: 1});
  ThreadUsers._ensureIndex({archive: 1}, {sparse: 1}); // sparse - 如果文档中不存在则不启用索引
  ThreadUsers._ensureIndex({star: 1}, {sparse: 1});
  ThreadUsers._ensureIndex({spam: 1}, {sparse: 1});
  Messages._ensureIndex({threadId: 1});
  Messages._ensureIndex({pinAt: 1});
});
