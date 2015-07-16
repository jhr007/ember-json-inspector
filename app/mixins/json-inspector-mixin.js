import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    updatePath: function (path) {
      // console.log('passed path', path );
      console.log('mixin path', this.get('path') );
      this.sendAction('updatePath', path);
    },
  }
});
