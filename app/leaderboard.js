/**
 * Created by knika on 3/1/2017.
 */
PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'selectedClass': function(){
      let playerId = this._id;
      let selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer) {
        return "selected";
      }
    }
  });
  Template.leaderboard.events({
    'click .player': function () {
      let playerId = this._id;
      Session.set('selectedPlayer', playerId);
      Session.get('selectedPlayer');
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer);
    }
  });
}

if(Meteor.isServer){
}