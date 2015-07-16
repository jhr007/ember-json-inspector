import Ember from 'ember';
import JsonInspectorMixinMixin from '../../../mixins/json-inspector-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | json inspector mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var JsonInspectorMixinObject = Ember.Object.extend(JsonInspectorMixinMixin);
  var subject = JsonInspectorMixinObject.create();
  assert.ok(subject);
});
