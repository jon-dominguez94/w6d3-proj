class FollowToggle {
  constructor (el) {
    this.userId = $(el).data('user_id');
    this.followState = $(el).data('initial-follow-state');
    this.$el = $(el);
    this.render();
  }

  render() {
    if(this.followState === "unfollowed") {
      this.$el.html("Follow!");
    } else {
      this.$el.html("Unfollow!");
    }
  }
}

module.exports = FollowToggle;
