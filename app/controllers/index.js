import Ember from 'ember';

export default Ember.Controller.extend({
//  jsonError: true,
  actions: {
    updatePath: function (newPath) {
      console.log('updatePath', newPath);
      this.set('propertyPath', newPath);
    },
    sampleData1() {
      var obj = {
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
          team: 'Heroes',
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
      var str = JSON.stringify(obj);
      this.set('jsontext',str);
    }
  },


  init: function () {
    this.set('jsonError', false);
    this.send('sampleData1');
    this.set('stickyOptions', {
      getWidthFrom: '.ji-panel',
      responsiveWidth: true

    });
  },

  jsonObj: Ember.computed('jsontext', function() {
    console.log('jsonObj');
    var jsonStr = this.get('jsontext');
    var oldObj = this.get('inspectThisObject');

    if ( jsonStr === undefined || jsonStr === '') {
      this.set('jsonError', false);
      this.set('inspectThisObject', undefined);
      return NaN;
      // return NaN; //@TODO DIRTY HACK
    }

    try {
      var tempObj = JSON.parse(jsonStr);
      this.set('jsonError', false);
      this.set('inspectThisObject', tempObj);
      return tempObj;
    }
    catch (e) {
      this.set('jsonError', true);
      this.set('jsonErrorMessage', e);
      // this.set('inspectThisObject', };
      return ( oldObj === undefined ) ? NaN : oldObj; 
      //@todo ... Dirty Dirty Hack
      //this.set('jsontext', "{str}");
    }

    throw new Error('Not sure how I got here');

  }),

  showInspector: Ember.computed('jsonObj', function() {
    console.log('showInspector');
    var jsonObj = this.get('jsonObj');
    var jsonParseIsValid = ! ( (Ember.typeOf(jsonObj) === 'number') && (jsonObj !== jsonObj) ); //NaN !== NaN
    var showInspector = jsonParseIsValid;

    if ( showInspector ) {
      var margin = 10;
      this.set('jsonInputWidth', 25);

      this.set('jsonInspectorLeftMargin', margin);
      this.set('jsonInspectorCenterMargin', 10);
      this.set('jsonInspectorRightMargin', margin);
    }
    else {
      var margin = 30;
      this.set('jsonInputWidth',40);
      this.set('jsonInspectorLeftMargin', margin);
      // this.set('jsonInspectorCenterMargin', 5);
      // this.set('jsonInspectorRightMargin', margin);
    }
    return showInspector;
  }),

  inspectThisObject: {},

});
