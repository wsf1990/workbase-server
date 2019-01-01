import './application-layout.html';
import './send-email-modal';
import './style.css';

Template.ApplicationLayout.onCreated(function() {
  this.dropdownEnhenced = false;
});

Template.ApplicationLayout.onRendered(function() {
  $('#btn-send-email [data-toggle="tooltip"]').tooltip({delay: 1000}); // not working?
  Tracker.autorun(() => {
    let title = Instance.company();
    let count = Counts.get('count-unread-inbox');
    document.title = (count > 0) ? `(${count}) ${title}` : title;
  });
  this.subscribe("shared.thread");
});

Template.ApplicationLayout.events({
  "focus #search-form input[name=search]"(e, t) {
    e.preventDefault();
    $(e.target).blur();
    Modal.show("SearchModal", null, {
      backdrop: 'static'
    });
  },
  "click #btn-sign-out"(e, t) {
    e.preventDefault();
    // history.go(-1);
    Meteor.logout();
  }
});
