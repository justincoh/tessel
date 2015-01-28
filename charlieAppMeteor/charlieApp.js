if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Walks.remove({});
    Walks.insert({date:Date()});
  });
};


Walks = new Mongo.Collection("walks");

if(Meteor.isClient){

  Template.hello.helpers({
    getWalks: function(){
      return Walks.find({});
    }
  });
}

Router.route('/',function(){
  console.log('HERE',this);
  this.render('hello');
}).get('/',function(){
  console.log("GET");
  this.render('hello')
})
  .post('/',function(){
    console.log('POST',arguments);
    this.render('hello')
})