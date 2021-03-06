import '../roster';
import './methods';

Meteor.startup(function() {
  let thread = Threads.findOne({category: 'Roster'});
  thread || Threads.create(null, 'Roster', 'thread_users_management', 'admin');
});

Accounts.onLogin(function(attempt) {
  let user = Users.findOne(attempt.user._id);
  if (user && user.isAdmin()) {
    let thread = Threads.findOne({category: 'Roster'});
    thread && Threads.ensureMember(thread, user);
  }
});
