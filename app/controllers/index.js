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
//     this.set('jsonInputWidth',45);
//     this.set('jsonInputOffset', 0);
    this.set('jsonError', false);

    var initObj = {
      uberAlles: [0,1,2,[0,1,2,[0,1,2,3],3],3],
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

//    this.set('jsontext', str);
  },

  jsonObj: Ember.computed('jsontext', function() {
    var jsonstr = this.get('jsontext');

    if ( jsonstr === undefined ) {
      this.set('jsonError', false);
      return NaN; //@TODO DIRTY HACK
    }

    try {
      var tempObj = JSON.parse(jsonstr);
      this.set('jsonError', false);
      this.set('inspectThisObject', tempObj);
      return tempObj;
    }
    catch (e) {
      this.set('jsonError', true);
      this.set('jsonErrorMessage', e);
      this.set('inspectThisObject', {});
      return NaN; //@todo ... Dirty Dirty Hack
      //this.set('jsontext', "{str}");
    }

    throw new Error('Not sure how I got here');

  }),

  showInspector: Ember.computed('jsonObj', function() {
    var jsonParse = this.get('jsonObj');
    var jsonParseIsValid = ! ( (Ember.typeOf(jsonParse) === 'number') && (jsonParse !== jsonParse) ) //NaN !== NaN
    var showInspector = jsonParseIsValid;

    if ( showInspector ) {
      this.set('jsonInputWidth', 30);
      this.set('jsonInputOffset', 0);
    }
    else {
      this.set('jsonInputWidth',40);
      this.set('jsonInputOffset', 30);
    }
    return jsonParseIsValid
  }),

  inspectThisObject: {},

});
