window.JA = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
      var postsData = JSON.parse($('#post-bootstrap').html());
   var posts = new JA.Collections.Posts(postsData);

   this.installSidebar(posts, $('#sidebar'));
   var router = new JA.Routers.Post( posts, $('#content') );

   Backbone.history.start();
   },
   installSidebar: function( posts, $sidebar) {
       var postsView = new JA.Views.PostIndex( posts );

       $sidebar.html(postsView.render().$el);
   }
};

$(document).ready(function(){
  JA.initialize();
});
