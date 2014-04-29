App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return {};
  }
});

 App.BootstrapImgcardComponent = Ember.Component.extend({
    classNames:['col-lg-4']
  });

  App.BootstrapRoundimgcardComponent = App.BootstrapImgcardComponent.extend({
    classNames:['col-lg-4']
  });