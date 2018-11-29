const APIUtil = require('./api_util.js');
const FollowToggle = require ('./follow_toggle.js');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = (this.$el.find('input'));
    this.$ul = $(this.$el.find('ul'));
    // debugger
    this.handleInput();
  }

  handleInput () {
    this.$input.on('keyup', e => {
      APIUtil.searchUsers(this.$input.val(), this.renderResults.bind(this));
    });

  }

  // success (data) {
  //   let something = JSON.parse(data);
  //
  // }

  renderResults (data) {
    // debugger
    this.$ul.empty();
    const that = this;
    data.forEach( el => {
      let $li = $('<li></li>');
      let $a = $(`<a href="/users/${el.id}"></a>`).html(`${el.username}`);
      let $btn = $('<button></button>');

      let $followButton = new FollowToggle($btn, {userId: el.id, followState: el.followstate});

      $li.append($a);
      $li.append($btn);

      that.$ul.append($li);
    });

  }
}

module.exports = UsersSearch;
