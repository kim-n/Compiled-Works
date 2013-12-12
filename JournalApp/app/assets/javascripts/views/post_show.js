JA.Views.PostShow = Backbone.View.extend({
    initialize: function (model) {
        this.model = model;
    },

    events: {
        'dblclick .postCurrent': 'editPost',
        'blur .postChange' :'updatePost'
    },

    tagName: 'form',

    render: function () {
        var that = this;
        this.$el.html(JST["show"]({post: that.model }));
        return this;
    },

    editPost: function (event) {
        var disp = $(event.currentTarget);
        this.toggleHidden(disp.next() ,disp);
    },

    toggleHidden: function (show, hide) {
        hide.addClass('hidden');
        show.removeClass('hidden');
    },

    updatePost: function (event) {
        var $event = $(event.currentTarget)
        var newAttrs = $event.parent().serializeJSON();
        this.model.save(newAttrs.post);
        this.toggleHidden($event.prev(), $event);
        $event.prev().html($event.val());
    }


})