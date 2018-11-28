const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor (el) {
    this.userId = $(el).data('user_id');
    this.followState = $(el).data('initial-follow-state');
    this.$el = $(el);
    this.render();
    this.handleClick();
  }

  render() {
    if(this.followState === "unfollowed") {
      this.$el.html("Follow!");
    } else {
      this.$el.html("Unfollow!");
    }
  }

  handleClick(){

    // debugger;

    this.$el.on("click", e => {
      e.preventDefault();
      // debugger;
      let method;
      if(this.followState === "unfollowed") {
        // method = "POST";
        APIUtil.followUser(this.userId).then(() => {
          this.followState = "followed";
          this.render();
        });
      } else {
        APIUtil.unfollowUser(this.userId).then(() => {
          this.followState = "unfollowed";
          this.render();
        });
        // method = "DELETE";
      }
      // return $.ajax({
      //   method: method,
      //   url: `/users/${this.userId}/follow`,
      //   dataType: 'JSON'
      // }).then(() => {
      //   if(this.followState === "unfollowed") {
      //     this.followState = "followed";
      //   } else {
      //     this.followState = "unfollowed";
      //   }
      //   this.render();
      // });
    });
    // debugger


    // this.render();
  }
}

module.exports = FollowToggle;
