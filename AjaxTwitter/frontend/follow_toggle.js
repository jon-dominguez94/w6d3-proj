class FollowToggle {
  constructor (el) {
    this.userId = el.user_id;
    this.followState = el.initial-follow-state;
    this.$el = $(el);
  }

}
