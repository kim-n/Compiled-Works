(function (root) {
  var Hello = root.Hello = (root.Hello || {});

  Hello.greet = function() {
    console.log("Hello!")
  }
})(this);