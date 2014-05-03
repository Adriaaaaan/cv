App = Ember.Application.create();

App.emailAddress='elhobito@gmail.com';
App.mandrillApiKey = '';
App.mandrillApiUrl='https://mandrillapp.com/api/1.0/messages/send.json';

/***
Router
****/
App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return {};
  }
});

/***
Components
****/
 App.BootstrapImgcardComponent = Ember.Component.extend({
    classNames:['col-lg-4']
  });

  App.BootstrapRoundimgcardComponent = App.BootstrapImgcardComponent.extend({
    classNames:['col-lg-4']
  });

  App.BootstrapDoubleimgcardComponent = App.BootstrapImgcardComponent.extend({
    classNames:['col-lg-4']
  });

/***
models
****/
App.EmailMessage = Ember.Object.extend({
	from_email:null,
	to:[App.EmailRecepient.create({email:App.emailAddress})],
	autotext:null.
	subject:null,
	html:null
});

/***
application
****/

App.ModalWindow = Ember.View.extend({
	classNames:['modalwindow'],
	classNameBindings:[visible:showWindow:hideWindow],
	layoutName:'modalWindow',
	visible:null,
	onSuccess:function(){},
	onError:function(){},
	close:function(){
		this.set('visible',false);
	},
	actions:{
		doAction:function(){
			var self=this;
			var promise = Ember.RSVP.promise();
			promise.then(
				function(response){
					self.onSuccess(response);
					this.set('visible',false);
				},
				function(error){
					self.onError(error);
				}
			);
			this.doAction(promise);
		},
		cancel:function(){
			this.close();
		}
	}
});

App.ContactMeView = App.ModalWindow.extend({
	doAction:function(promise){

	}
});