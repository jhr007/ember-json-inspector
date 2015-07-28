import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    updatePath: function (path) {
      // console.log('in:' + this.get('classNames')[1]  + ' - path: ' + path + ' - thisPath = ' + this.get('path'));
      this.sendAction('updatePath', path);
    },
  }
});
