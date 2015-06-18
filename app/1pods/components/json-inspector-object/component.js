import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    updatePath: function (path) {
      this.sendAction('updatePath', path);
    }
  },

    arrayedObj: function () {
//    return [{key:'woot',val:'val'}];
    //tod
    var obj = this.get('jiObject');
    var keys = Object.keys(obj);
    var thisPath = this.get('propertyPath');

// @todo settings.sort
//    if ( settings.sort )

    var vals = keys.map(function (key, idx, origarray) {
      var newObj = {
        key: key,
        val: obj[key],
        _index: idx,
        isFirst: idx===0,
        isLast: idx===(origarray.length-1),
        //@todo dot notation?
        path: thisPath + '[\''+key+'\']'
      };

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
  }.property('jiObject'),
//*/
});
