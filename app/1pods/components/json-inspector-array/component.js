import Ember from 'ember';
import jiMixin from 'ember-json-inspector/mixins/json-inspector-mixin';

export default Ember.Component.extend( jiMixin, {
  attributeBindings: ['layoutFill:layout-fill'],
  layoutFill:"",

  actions: {
    toggleExpanded: function ( ) {
      this.toggleProperty('isExpanded');
    }
  },

  isExpanded: true,

  arrayedArray: Ember.computed('jiArray', function () {

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
      };
      return newObj;
    });

    return vals;
  }),
});
