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
      uberAlles: [0,1,2,3],
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
    var str = JSON.stringify(initObj);

    this.set('jsontext', str);
    //'{"keyone":"soeme value","keytwo":"woot","alfred":123123,"batman":{"name":"bruce wayne","butler":"alfred","team":"badasses","car":{"name":"batmobile","wheels":4}}}');
  },


  //jsonError: false,
  //jsonErrorMessage: 'Enter some JSON below',

  jsonObj: function() {
//    var jsonstr = this.get('jsontext');
//    console.log('jsontext',jsonstr);
//    console.log('jsontextasdfasdf');
//    return 'test';
    console.log( 'jsontext', this.get('jsontext') );
    try {
      var jsonstr = this.get('jsontext');
      var tempObj = JSON.parse(jsonstr);
      this.set('jsonError',false);
      return tempObj;
    }
    catch (e) {
      console.log('Array');
      this.set('jsonError', true);
      this.set('jsonErrorMessage', e);
      return {};
    }
    console.log('Got to end');
  }.property('jsontext')

});
