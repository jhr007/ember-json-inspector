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
    var thisPath = this.get('propertyPath');

// @todo settings.sort
//    if ( settings.sort )

    console.log('arr.map', thisPath, arr, this);

    var vals = arr.map(function (val, idx, origarray) {
      var newObj = {
        key: idx,
        val: val,
        _index: idx,
        isFirst: idx===0,
        isLast: idx===(origarray.length-1),

        path: thisPath + '['+idx+']'
      }


      // metadata about the key
      var typeOf = Ember.typeOf( newObj.val )
      if ( typeOf === 'array') {
        newObj.isArray = true;
      }
      else if ( typeOf === 'object') {
        newObj.isObject = true;
      }
      else if ( typeOf === 'string') {
        newObj.isString = true;
      }
      else if (( typeOf === 'number') || ( typeOf === 'boolean')) {
        newObj.isNumber = true;
      }
      else {
        if (newObj.val !== "") {
          throw new Error('LOL!! What is this?', typeOf );
        }
//         newObj.isPrimitive = true;
      }

//       vals.push(newObj);
        return newObj;
    });

    return vals;
  }.property('jiArray'),
});
