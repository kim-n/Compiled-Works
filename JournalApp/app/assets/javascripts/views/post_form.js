JA.Views.PostForm = Backbone.View.extend({
    initialize: function (collection) {
        this.post = new JA.Models.Post();
        this.collection = collection;
    },

    tagName: 'form',

    events: {
        'submit': 'submit'
    },

    render: function () {
        var that = this;
        this.$el.html(JST["new"]({post: that.post}));
        return this;
    },

    submit: function (event) {
        event.preventDefault();
        var obj = $(event.currentTarget).serializeJSON();

        this.post.set(obj.post);
        if(!this.post.isValid()) {
            this.render();
            return;
        }

        var that = this;

        this.collection.create(this.post,{
           success: function(resp) {
             that.postSaved(resp);
           },
           error: function(resp){
             that.postSaveError(resp);
           }
        });

    },
    postSaved: function(resp){
        Backbone.history.navigate("#posts/" + this.post.id, {trigger: true});
        // window.location.hash = "#posts/"+this.post.id;
    },
    postSaveError: function(resp){
        this.render();
    }
})