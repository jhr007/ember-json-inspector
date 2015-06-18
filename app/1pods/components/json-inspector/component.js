import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
// @todo DRY? Create a mixin for this action?
    updatePath: function(path) {
      this.sendAction('updatePath', path)
    //   updateAction
    }
  },

  isArray: function () {
    return Ember.typeOf( this.get('inspectThis')) === 'array'
  }.property('inspectThis'),

  isObject: function () {
    return Ember.typeOf( this.get('inspectThis')) === 'object'
  }.property('inspectThis'),

  isPrimitive: function () {
    var obj = this.get('inspectThis');
    return ( (Ember.typeOf( obj ) !== 'array') && ( Ember.typeOf( obj ) !== 'object') ); 
  }.property('inspectThis'),
});
