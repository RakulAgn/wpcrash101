(() => {
  "use strict";
  new (class {
    constructor() {}
    twoSum(t, r) {
      let e = {};
      for (let n = 0; n < t.length; n++) {
        const s = t[n],
          c = r - s;
        if (c in e) return [e[c], n];
        e[s] = n;
      }
      return [];
    }
  })();
})();
