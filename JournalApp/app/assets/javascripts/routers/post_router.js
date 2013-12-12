JA.Routers.Post = Backbone.Router.extend({
    initialize: function (posts, rootEl) {
        this.posts = posts;
        this.$rootEl = rootEl;
    },

    routes: {
        "posts/new": "newPost",
        "posts/:id": "postShow"

    },

    postShow: function (id) {
        var post = this.posts.get(id);
        var postView = new JA.Views.PostShow( post );

        this.$rootEl.html(postView.render().$el);
    },

    newPost: function () {
        var newPostForm = new JA.Views.PostForm(this.posts);
        this.$rootEl.html(newPostForm.render().$el);
    }
})