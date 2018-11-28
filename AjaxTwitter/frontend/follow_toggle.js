class FollowToggle {
  constructor (el) {
    this.userId = $(el).data('user_id');
    this.followState = $(el).data('initial-follow-state');
    this.$el = $(el);
  }

}

module.exports = FollowToggle;
