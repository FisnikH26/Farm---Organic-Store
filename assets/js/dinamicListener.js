!(function (e) {
  "use strict";
  e.addDynamicEventListener = function (e, t, r, n, a) {
    var i = (function (e, t) {
      return function (r) {
        if (r.target && r.target.matches(e))
          return (r.delegatedTarget = r.target), void t.apply(this, arguments);
        var n = event.path || (event.composedPath && event.composedPath());
        if (n)
          for (var a = 0; a < n.length; ++a) {
            var i = n[a];
            if (
              (i.matches(e) &&
                ((r.delegatedTarget = i), t.apply(this, arguments)),
              i === r.currentTarget)
            )
              return;
          }
      };
    })(r, n);
    return e.addEventListener(t, i, a), e.removeEventListener.bind(e, t, i, a);
  };
})(this);
