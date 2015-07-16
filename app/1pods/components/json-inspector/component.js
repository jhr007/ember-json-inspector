import Ember from 'ember';
import jiMixin from 'ember-json-inspector/mixins/json-inspector-mixin';

export default Ember.Component.extend(jiMixin, {
  classNames: ['ji-router'],

//   actions: {
// // @todo DRY? Create a mixin for this action?
//     updatePath: function(path) {
//       this.sendAction('updatePath', path)
//     //   updateAction
//     }
//   },

  init: function () {
    if ( this.get('isLast') === undefined ) {
      this.set('isLast', true);
    }

    this._super();
  },

  metaObj: function () {
    var inspectThis = this.get('inspectThis');
    var type = Ember.typeOf(inspectThis);

    var metaObj = {
      inspectObj: inspectThis,
      path: this.get('path') || 'yourVar',
      isArray: type === 'array',
      isObject: type === 'object',
      isPrimitive: (type === 'string') || (type === 'number') || (type === 'boolean')
    };

    return metaObj;

  }.property('inspectThis'),

});
