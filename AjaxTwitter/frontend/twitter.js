const FollowToggle = require ('./follow_toggle.js');

$( () => {
  // let $buttonFollow = $('button.follow-toggle');
  $('button.follow-toggle').each((idx, el) => new FollowToggle(el));
  // debugger;
  //   ( function (el) {
  //   this[el] = new FollowToggle();
  // }));
});
