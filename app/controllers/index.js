import Ember from 'ember';

export default Ember.Controller.extend({
//  jsonError: true,
  actions: {
    updatePath: function (newPath) {
      console.log('updatePath', newPath);
      this.set('propertyPath', newPath);
    }
  },


  init: function () {
    this.set('jsonBoxWidth',45);
    this.set('jsonError', false);
    
    var initObj = {
      uberAlles: [0,1,2,3],
      //uberAllesUber: [0,1,2,3],
      //uberAllesUberAlles: [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]],
      keyone: 'soeme value',
      keytwo: 'woot',
      isAwesome: true,
      alfred: 123123,
      batman: {
        name: 'bruce wayne',
        butler: 'alfred',
        team: 'badasses',
        car: [{
          name: 'batmobile',
          wheels: 4,
        },{
          name: 'batmobile',
          wheels: 4,
        },{
          name: 'batmobile',
          wheels: 4,
        }]
      }
    };

    /*
    initObj = {
      'Ember': [
        'J',
        5,
        0,
        'N',
        {'Inspector':true}
        ]
    };
    //*/

    var str = JSON.stringify(initObj);

    this.set('jsontext', str);
  },

  jsonObj: function() {

    try {
      var jsonstr = this.get('jsontext');
      var tempObj = JSON.parse(jsonstr);
      this.set('jsonError', false);
      return tempObj;
    }
    catch (e) {
      this.set('jsonError', true);
      this.set('jsonErrorMessage', e);
      return {};
    }

    throw new Error('Not sure how I got here');

  }.property('jsontext')

});
