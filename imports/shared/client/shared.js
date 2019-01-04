import './shared.html';

import Swal from 'sweetalert2';

Template.Shared.onRendered(function() {
  // 滚动页面触发
  $('#inbox-left').on('scroll', (e) => {
    let shared = ThreadUsers.findOne({category: 'Shared', userType: 'Users', userId: Meteor.userId()});
    if (shared && !shared.read) {
      Meteor.call("markRead", shared.threadId, (err, res) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
});

Template.SharedMessage.helpers({
  liked() {
    return this.hasReact(Meteor.userId(), 'like');
  },
  comments() {
    return Messages.find({parentId: this._id}, {sort: {createdAt: 1}});
  }
});

Template.SharedMessage.events({
  "click .btn-like"(e, t) {
    e.preventDefault();
    Meteor.call("toggleLikeMessage", this._id);
  },
  "click .btn-comment"(e, t) {
    e.preventDefault();

    Swal({
      input: 'textarea',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: I18n.t("Send"),
      cancelButtonText: I18n.t("Discard"),
      showLoaderOnConfirm: true,
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        Meteor.call("addComment", this._id, result.value);
      }
    })
  }
});

Template.SharedMenuItem.helpers({
  shared() {
    return ThreadUsers.findOne({category: 'Shared', userType: 'Users', userId: Meteor.userId()});
  }
});

Template.SharedMenu.events({
  "click #btn-share-image"(e, t) {
    e.preventDefault();
    $('#image-file').click();
  },
  "change #image-file"(e, t) {
    console.log("image selected");
    Modal.show('ImageMessageModal', {
      thread: this.thread,
      file:   e.target.files[0]
    }, {
      backdrop: 'static'
    });
    $(e.target).val(""); // reset file input
  },
  "click #btn-share"(e, t) {
    e.preventDefault();
    Modal.show('ShareModal', this.thread, {
      backdrop: 'static'
    });
  }
});

Template.ShareModal.onRendered(function() {
  this.subscribe("thread.files.pending", this.data._id);
  $(document).on("message.sent", (e, options) => {
    $('#btn-close-ShareModal').click();
  });
});

Template.ShareModal.onDestroyed(function() {
  $(document).off("message.sent");
});