import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePath: function (path) {
      this.sendAction('updatePath', path);
    }
  },

  init: function () {
    var val = this.get('jiPrimitive');
    var type = Ember.typeOf(val);

    if( type === 'string'  ) {
      val = '"' + val + '"';
    }

    //add command if not last
    if( ! this.get('isLast') ) {
      val += ',';
    }

    this.set('displayPrimitive', val);

    this._super();
  }
});
