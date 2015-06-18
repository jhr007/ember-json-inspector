import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePath: function (path) {
      this.sendAction('updatePath', path);
    }
  },

  arrayedArray: function () {

    var arr = this.get('jiArray');
    if (Ember.typeOf(arr) !== 'array') { return []; }
    var thisPath = this.get('path');

    var vals = arr.map(function (val, idx, origarray) {
      var newObj = {
        key: idx,
        val: val,
        _index: idx,
        isFirst: idx===0,
        isLast: idx===(origarray.length-1),

        path: thisPath + '['+idx+']'
      }
      return newObj;
    });

    return vals;
  }.property('jiArray'),
});
