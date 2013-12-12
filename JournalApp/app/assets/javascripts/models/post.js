JA.Models.Post = Backbone.Model.extend ({
    url: function(){
        if( this.isNew())
            return '/posts';
        return '/posts/' +this.get('id');
    },
    defaults: {
        title: "",
        body: ""
    },
    validate: function(attrs, options) {
        if (attrs.title.length < 4) {
          return {'title':"title must have 4 characters"};
        }
     }
});