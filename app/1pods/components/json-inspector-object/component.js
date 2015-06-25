import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    updatePath: function (path) {
      this.sendAction('updatePath', path);
    },
    toggleExpanded: function ( ) {
      this.toggleProperty('isExpanded');
    }
  },

//*
  init: function () {
    //console.log('json-ispector-object: isLast', this.get('isLast') );
    this.set('isExpanded', true);
    this._super();
  },
//*/

//  isExpanded: true,

  arrayedObj: function () {

    var obj = this.get('jiObject');
    var keys = Object.keys(obj);
    var thisPath = this.get('path');

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
      return newObj;
    });

    return vals;

  }.property('jiObject'),
//*/
});
