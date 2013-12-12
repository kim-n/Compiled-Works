JA.Views.PostIndex = Backbone.View.extend({

    initialize: function( collection  ){
        this.collection = collection;
        this.listenTo(this.collection, 'add', this.render);
        this.listenTo(this.collection, 'change', this.render);
        this.listenTo(this.collection, 'remove', this.render);
        this.listenTo(this.collection, 'reset', this.render);
    },

    events: {
        'click button.delete_post': 'deletePost'
    },

    deletePost: function (e) {
        var id = $(e.currentTarget).attr('data-id');
        var post = this.collection.get(id);
        post.destroy();
    },

    render: function() {
        var that = this;
        this.$el.html(JST["index"]({posts: that.collection.models }));
        return this;
    }
});