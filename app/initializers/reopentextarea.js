import Ember from 'ember';

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.TextArea.reopen({
    attributeBindings: ['layout-fill']
  });
  Ember.TextField.reopen({
    attributeBindings: ['layout-fill']
  });
}

export default {
  name: 'reopentextarea',
  initialize: initialize
};
