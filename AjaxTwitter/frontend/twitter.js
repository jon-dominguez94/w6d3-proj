const FollowToggle = require ('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$( () => {
  // let $buttonFollow = $('button.follow-toggle');
  $('button.follow-toggle').each((idx, el) => new FollowToggle(el, {userId: null, followState: null}));
  // debugger;
  $('nav.users-search').each((idx, el) => new UsersSearch(el));
  //   ( function (el) {
  //   this[el] = new FollowToggle();
  // }));
});
