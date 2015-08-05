"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('ember-json-inspector/1pods/components/json-inspector-array/component', ['exports', 'ember', 'ember-json-inspector/mixins/json-inspector-mixin'], function (exports, Ember, jiMixin) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(jiMixin['default'], {
    attributeBindings: ['layoutFill:layout-fill'],
    layoutFill: "",

    actions: {
      toggleExpanded: function toggleExpanded() {
        this.toggleProperty('isExpanded');
      }
    },

    isExpanded: true,

    arrayedArray: Ember['default'].computed('jiArray', function () {

      var arr = this.get('jiArray');
      if (Ember['default'].typeOf(arr) !== 'array') {
        return [];
      }
      var thisPath = this.get('path');

      var vals = arr.map(function (val, idx, origarray) {
        var newObj = {
          key: idx,
          val: val,
          _index: idx,
          isFirst: idx === 0,
          isLast: idx === origarray.length - 1,

          path: thisPath + '[' + idx + ']'
        };
        return newObj;
      });

      return vals;
    })
  });

});
define('ember-json-inspector/1pods/components/json-inspector-array/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 12
              },
              "end": {
                "line": 20,
                "column": 12
              }
            },
            "moduleName": "ember-json-inspector/1pods/components/json-inspector-array/template.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","material-design-icon",[],["name","menu-down"],["loc",[null,[19,16],[19,57]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 22,
                "column": 12
              },
              "end": {
                "line": 24,
                "column": 12
              }
            },
            "moduleName": "ember-json-inspector/1pods/components/json-inspector-array/template.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","material-design-icon",[],["name","menu-right"],["loc",[null,[23,16],[23,58]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 8
            },
            "end": {
              "line": 25,
              "column": 8
            }
          },
          "moduleName": "ember-json-inspector/1pods/components/json-inspector-array/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","isExpanded",["loc",[null,[18,18],[18,28]]]]],[],0,null,["loc",[null,[18,12],[20,19]]]],
          ["block","unless",[["get","isExpanded",["loc",[null,[22,22],[22,32]]]]],[],1,null,["loc",[null,[22,12],[24,23]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 12
              },
              "end": {
                "line": 38,
                "column": 12
              }
            },
            "moduleName": "ember-json-inspector/1pods/components/json-inspector-array/template.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"layout","row");
            dom.setAttribute(el1,"layout-margin","");
            dom.setAttribute(el1,"class","jiRow");
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            return morphs;
          },
          statements: [
            ["inline","json-inspector",[],["inspectThis",["subexpr","@mut",[["get","obj.val",["loc",[null,[35,49],[35,56]]]]],[],[]],"path",["subexpr","@mut",[["get","obj.path",["loc",[null,[35,62],[35,70]]]]],[],[]],"updatePath","updatePath","isLast",["subexpr","@mut",[["get","obj.isLast",["loc",[null,[35,102],[35,112]]]]],[],[]]],["loc",[null,[35,20],[35,114]]]]
          ],
          locals: ["obj"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 8
            },
            "end": {
              "line": 40,
              "column": 8
            }
          },
          "moduleName": "ember-json-inspector/1pods/components/json-inspector-array/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["block","each",[["get","arrayedArray",["loc",[null,[32,20],[32,32]]]]],[],0,null,["loc",[null,[32,12],[38,21]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 40,
              "column": 8
            },
            "end": {
              "line": 42,
              "column": 8
            }
          },
          "moduleName": "ember-json-inspector/1pods/components/json-inspector-array/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ...\n        ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 44,
              "column": 9
            },
            "end": {
              "line": 44,
              "column": 28
            }
          },
          "moduleName": "ember-json-inspector/1pods/components/json-inspector-array/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(",");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 49,
            "column": 0
          }
        },
        "moduleName": "ember-json-inspector/1pods/components/json-inspector-array/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"layout","row");
        dom.setAttribute(el1,"class","ji-array");
        dom.setAttribute(el1,"layout-fill","");
        dom.setAttribute(el1,"layout-padding","");
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"layout-fill","");
        var el3 = dom.createTextNode(" [\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ]");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
        morphs[2] = dom.createMorphAt(element1,1,1);
        morphs[3] = dom.createMorphAt(element1,4,4);
        return morphs;
      },
      statements: [
        ["element","action",["updatePath",["get","path",["loc",[null,[14,90],[14,94]]]]],["bubbles",false],["loc",[null,[14,68],[14,110]]]],
        ["block","md-button",[],["class","ji-button","action","toggleExpanded","bubbles",false],0,null,["loc",[null,[17,8],[25,22]]]],
        ["block","if",[["get","isExpanded",["loc",[null,[30,14],[30,24]]]]],[],1,2,["loc",[null,[30,8],[42,15]]]],
        ["block","unless",[["get","isLast",["loc",[null,[44,19],[44,25]]]]],[],3,null,["loc",[null,[44,9],[44,39]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('ember-json-inspector/1pods/components/json-inspector-object/component', ['exports', 'ember', 'ember-json-inspector/mixins/json-inspector-mixin'], function (exports, Ember, jiMixin) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(jiMixin['default'], {

    actions: {
      toggleExpanded: function toggleExpanded() {
        this.toggleProperty('isExpanded');
        return false;
      }
    },

    //*
    init: function init() {
      //console.log('json-ispector-object: isLast', this.get('isLast') );
      this.set('isExpanded', true);
      this._super();
    },
    //*/

    //  isExpanded: true,

    arrayedObj: (function () {

      var obj = this.get('jiObject');
      var keys = Object.keys(obj);
      var thisPath = this.get('path');

      // @todo settings.sort
      //    if ( settings.sort )

      var vals = keys.map(function (key, idx, origarray) {
        var newObj = {
          key: key,
          val: obj[key],
          _index: idx,
          isFirst: idx === 0,
          isLast: idx === origarray.length - 1,
          //@todo dot notation?
          path: thisPath + '[\'' + key + '\']'
        };
        return newObj;
      });

      return vals;
    }).property('jiObject')
  });
  //*/

});
define('ember-json-inspector/1pods/components/json-inspector-object/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 8
              },
              "end": {
                "line": 21,
                "column": 8
              }
            },
            "moduleName": "ember-json-inspector/1pods/components/json-inspector-object/template.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","material-design-icon",[],["name","menu-down"],["loc",[null,[20,12],[20,53]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 8
              },
              "end": {
                "line": 25,
                "column": 8
              }
            },
            "moduleName": "ember-json-inspector/1pods/components/json-inspector-object/template.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","material-design-icon",[],["name","menu-right"],["loc",[null,[24,12],[24,54]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 4
            },
            "end": {
              "line": 26,
              "column": 4
            }
          },
          "moduleName": "ember-json-inspector/1pods/components/json-inspector-object/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","isExpanded",["loc",[null,[19,14],[19,24]]]]],[],0,null,["loc",[null,[19,8],[21,15]]]],
          ["block","unless",[["get","isExpanded",["loc",[null,[23,18],[23,28]]]]],[],1,null,["loc",[null,[23,8],[25,19]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 33,
                "column": 8
              },
              "end": {
                "line": 45,
                "column": 8
              }
            },
            "moduleName": "ember-json-inspector/1pods/components/json-inspector-object/template.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"layout","row");
            dom.setAttribute(el1,"layout-margin","");
            dom.setAttribute(el1,"class","jiRow");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","jiKey");
            dom.setAttribute(el2,"layout-padding","");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("                        \"");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\": \n");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createElementMorph(element1);
            morphs[1] = dom.createMorphAt(element1,2,2);
            morphs[2] = dom.createMorphAt(element0,4,4);
            return morphs;
          },
          statements: [
            ["element","action",["updatePath",["get","obj.path",["loc",[null,[36,75],[36,83]]]]],["bubbles",false],["loc",[null,[36,53],[36,99]]]],
            ["content","obj.key",["loc",[null,[38,25],[38,36]]]],
            ["inline","json-inspector",[],["inspectThis",["subexpr","@mut",[["get","obj.val",["loc",[null,[42,49],[42,56]]]]],[],[]],"path",["subexpr","@mut",[["get","obj.path",["loc",[null,[42,62],[42,70]]]]],[],[]],"updatePath","updatePath","isLast",["subexpr","@mut",[["get","obj.isLast",["loc",[null,[42,102],[42,112]]]]],[],[]]],["loc",[null,[42,20],[42,114]]]]
          ],
          locals: ["obj"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 4
            },
            "end": {
              "line": 46,
              "column": 4
            }
          },
          "moduleName": "ember-json-inspector/1pods/components/json-inspector-object/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","each",[["get","arrayedObj",["loc",[null,[33,16],[33,26]]]]],[],0,null,["loc",[null,[33,8],[45,17]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 46,
              "column": 4
            },
            "end": {
              "line": 48,
              "column": 4
            }
          },
          "moduleName": "ember-json-inspector/1pods/components/json-inspector-object/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ...\n    ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 50,
              "column": 5
            },
            "end": {
              "line": 50,
              "column": 24
            }
          },
          "moduleName": "ember-json-inspector/1pods/components/json-inspector-object/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(",");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 57,
            "column": 0
          }
        },
        "moduleName": "ember-json-inspector/1pods/components/json-inspector-object/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"layout","row");
        dom.setAttribute(el1,"layout-padding","");
        dom.setAttribute(el1,"class","ji-object");
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode(" {\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    }");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [2]);
        var element3 = dom.childAt(element2, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createElementMorph(element2);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]),1,1);
        morphs[2] = dom.createMorphAt(element3,1,1);
        morphs[3] = dom.createMorphAt(element3,4,4);
        return morphs;
      },
      statements: [
        ["element","action",["updatePath",["get","path",["loc",[null,[15,76],[15,80]]]]],["bubbles",false],["loc",[null,[15,54],[15,96]]]],
        ["block","md-button",[],["class","ji-button","action","toggleExpanded","bubbles",false],0,null,["loc",[null,[18,4],[26,18]]]],
        ["block","if",[["get","isExpanded",["loc",[null,[31,10],[31,20]]]]],[],1,2,["loc",[null,[31,4],[48,11]]]],
        ["block","unless",[["get","isLast",["loc",[null,[50,15],[50,21]]]]],[],3,null,["loc",[null,[50,5],[50,35]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('ember-json-inspector/1pods/components/json-inspector-primitive/component', ['exports', 'ember', 'ember-json-inspector/mixins/json-inspector-mixin'], function (exports, Ember, jiMixin) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(jiMixin['default'], {
    classNames: ['ji-primitive'],

    init: function init() {
      var val = this.get('jiPrimitive');
      var type = Ember['default'].typeOf(val);

      if (type === 'string') {
        val = '"' + val + '"';
      }
      if (type === 'null') {
        val = "null";
      }

      //add command if not last
      if (!this.get('isLast')) {
        val += ',';
      }

      this.set('displayPrimitive', val);

      this._super();
    }
  });

});
define('ember-json-inspector/1pods/components/json-inspector-primitive/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "ember-json-inspector/1pods/components/json-inspector-primitive/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jiVal");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(element0,1,1);
        return morphs;
      },
      statements: [
        ["element","action",["updatePath",["get","path",["loc",[null,[10,27],[10,31]]]]],["bubbles",false],["loc",[null,[10,5],[10,47]]]],
        ["content","displayPrimitive",["loc",[null,[11,4],[11,26]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('ember-json-inspector/1pods/components/json-inspector/component', ['exports', 'ember', 'ember-json-inspector/mixins/json-inspector-mixin'], function (exports, Ember, jiMixin) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(jiMixin['default'], {
    classNames: ['ji-router'],

    // attributeBindings: ['layoutFill:layout-fill'],
    // layoutFill:"",

    init: function init() {
      if (this.get('isLast') === undefined) {
        this.set('isLast', true);
      }

      this._super();
    },

    metaObj: Ember['default'].computed('inspectThis', function () {
      var inspectThis = this.get('inspectThis');
      var type = Ember['default'].typeOf(inspectThis);

      var metaObj = {
        inspectObj: inspectThis,
        path: this.get('path') || 'yourVar',
        isArray: type === 'array',
        isObject: type === 'object',
        isPrimitive: type === 'string' || type === 'number' || type === 'boolean' || type === 'null'
      };

      return metaObj;
    })

  });

});
define('ember-json-inspector/1pods/components/json-inspector/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "ember-json-inspector/1pods/components/json-inspector/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","json-inspector-object",[],["jiObject",["subexpr","@mut",[["get","metaObj.inspectObj",["loc",[null,[3,37],[3,55]]]]],[],[]],"path",["subexpr","@mut",[["get","metaObj.path",["loc",[null,[3,61],[3,73]]]]],[],[]],"isLast",["subexpr","@mut",[["get","isLast",["loc",[null,[3,81],[3,87]]]]],[],[]],"updatePath","updatePath"],["loc",[null,[3,4],[3,113]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ember-json-inspector/1pods/components/json-inspector/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","json-inspector-array",[],["jiArray",["subexpr","@mut",[["get","metaObj.inspectObj",["loc",[null,[7,36],[7,54]]]]],[],[]],"path",["subexpr","@mut",[["get","metaObj.path",["loc",[null,[7,60],[7,72]]]]],[],[]],"isLast",["subexpr","@mut",[["get","isLast",["loc",[null,[7,80],[7,86]]]]],[],[]],"updatePath","updatePath"],["loc",[null,[7,4],[7,112]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "ember-json-inspector/1pods/components/json-inspector/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","json-inspector-primitive",[],["jiPrimitive",["subexpr","@mut",[["get","metaObj.inspectObj",["loc",[null,[11,41],[11,59]]]]],[],[]],"path",["subexpr","@mut",[["get","metaObj.path",["loc",[null,[11,65],[11,77]]]]],[],[]],"isLast",["subexpr","@mut",[["get","isLast",["loc",[null,[11,85],[11,91]]]]],[],[]],"updatePath","updatePath"],["loc",[null,[11,2],[11,117]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "ember-json-inspector/1pods/components/json-inspector/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,5,5,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","metaObj.isObject",["loc",[null,[2,6],[2,22]]]]],[],0,null,["loc",[null,[2,0],[4,7]]]],
        ["block","if",[["get","metaObj.isArray",["loc",[null,[6,6],[6,21]]]]],[],1,null,["loc",[null,[6,0],[8,7]]]],
        ["block","if",[["get","metaObj.isPrimitive",["loc",[null,[10,6],[10,25]]]]],[],2,null,["loc",[null,[10,0],[12,7]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('ember-json-inspector/acceptance-tests/main', ['exports', 'ember-cli-sri/acceptance-tests/main'], function (exports, main) {

	'use strict';



	exports['default'] = main['default'];

});
define('ember-json-inspector/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'ember-json-inspector/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;
  Ember['default'].deprecate = function () {};

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('ember-json-inspector/components/material-design-icon', ['exports', 'ember-cli-material-design-icons/components/material-design-icon'], function (exports, material_design_icon) {

	'use strict';



	exports['default'] = material_design_icon['default'];

});
define('ember-json-inspector/components/md-backdrop', ['exports', 'ember-material-design/components/md-backdrop'], function (exports, mdBackdrop) {

	'use strict';

	exports['default'] = mdBackdrop['default'];

});
define('ember-json-inspector/components/md-button-link', ['exports', 'ember-material-design/components/md-button-link'], function (exports, mdButtonLink) {

	'use strict';

	exports['default'] = mdButtonLink['default'];

});
define('ember-json-inspector/components/md-button', ['exports', 'ember-material-design/components/md-button'], function (exports, mdButton) {

	'use strict';

	exports['default'] = mdButton['default'];

});
define('ember-json-inspector/components/md-checkbox', ['exports', 'ember-material-design/components/md-checkbox'], function (exports, mdCheckbox) {

	'use strict';

	exports['default'] = mdCheckbox['default'];

});
define('ember-json-inspector/components/md-icon', ['exports', 'ember-material-design/components/md-icon'], function (exports, mdIcon) {

	'use strict';

	exports['default'] = mdIcon['default'];

});
define('ember-json-inspector/components/md-input-container', ['exports', 'ember-material-design/components/md-input-container'], function (exports, mdInputContainer) {

	'use strict';

	exports['default'] = mdInputContainer['default'];

});
define('ember-json-inspector/components/md-input', ['exports', 'ember-material-design/components/md-input'], function (exports, mdInput) {

	'use strict';

	exports['default'] = mdInput['default'];

});
define('ember-json-inspector/components/md-list-item', ['exports', 'ember-material-design/components/md-list-item'], function (exports, mdListItem) {

	'use strict';

	exports['default'] = mdListItem['default'];

});
define('ember-json-inspector/components/md-list', ['exports', 'ember-material-design/components/md-list'], function (exports, mdList) {

	'use strict';

	exports['default'] = mdList['default'];

});
define('ember-json-inspector/components/md-progress-circular', ['exports', 'ember-material-design/components/md-progress-circular'], function (exports, mdProgressCircular) {

	'use strict';

	exports['default'] = mdProgressCircular['default'];

});
define('ember-json-inspector/components/md-progress-linear', ['exports', 'ember-material-design/components/md-progress-linear'], function (exports, mdProgressLinear) {

	'use strict';

	exports['default'] = mdProgressLinear['default'];

});
define('ember-json-inspector/components/md-radio-button', ['exports', 'ember-material-design/components/md-radio-button'], function (exports, mdRadioButton) {

	'use strict';

	exports['default'] = mdRadioButton['default'];

});
define('ember-json-inspector/components/md-sidenav', ['exports', 'ember-material-design/components/md-sidenav'], function (exports, mdSidenav) {

	'use strict';

	exports['default'] = mdSidenav['default'];

});
define('ember-json-inspector/components/md-slider', ['exports', 'ember-material-design/components/md-slider'], function (exports, mdSlider) {

	'use strict';

	exports['default'] = mdSlider['default'];

});
define('ember-json-inspector/components/md-tab-content', ['exports', 'ember-material-design/components/md-tab-content'], function (exports, mdTabContent) {

	'use strict';

	exports['default'] = mdTabContent['default'];

});
define('ember-json-inspector/components/md-tab-item', ['exports', 'ember-material-design/components/md-tab-item'], function (exports, mdTabItem) {

	'use strict';

	exports['default'] = mdTabItem['default'];

});
define('ember-json-inspector/components/md-tab', ['exports', 'ember-material-design/components/md-tab'], function (exports, mdTab) {

	'use strict';

	exports['default'] = mdTab['default'];

});
define('ember-json-inspector/components/md-tabs-content-wrapper', ['exports', 'ember-material-design/components/md-tabs-content-wrapper'], function (exports, mdTabsContentWrapper) {

	'use strict';

	exports['default'] = mdTabsContentWrapper['default'];

});
define('ember-json-inspector/components/md-tabs-wrapper', ['exports', 'ember-material-design/components/md-tabs-wrapper'], function (exports, mdTabsWrapper) {

	'use strict';

	exports['default'] = mdTabsWrapper['default'];

});
define('ember-json-inspector/components/md-tabs', ['exports', 'ember-material-design/components/md-tabs'], function (exports, mdTabs) {

	'use strict';

	exports['default'] = mdTabs['default'];

});
define('ember-json-inspector/components/md-textarea', ['exports', 'ember-material-design/components/md-textarea'], function (exports, mdTextarea) {

	'use strict';

	exports['default'] = mdTextarea['default'];

});
define('ember-json-inspector/components/md-toast', ['exports', 'ember-material-design/components/md-toast'], function (exports, mdToast) {

	'use strict';

	exports['default'] = mdToast['default'];

});
define('ember-json-inspector/components/md-toolbar', ['exports', 'ember-material-design/components/md-toolbar'], function (exports, mdToolbar) {

	'use strict';

	exports['default'] = mdToolbar['default'];

});
define('ember-json-inspector/components/md-tooltip', ['exports', 'ember-material-design/components/md-tooltip'], function (exports, mdTooltip) {

	'use strict';

	exports['default'] = mdTooltip['default'];

});
define('ember-json-inspector/components/sticky-container', ['exports', 'ember', 'ember-cli-sticky/components/sticky-container'], function (exports, Ember, StickyContainer) {

	'use strict';

	exports['default'] = StickyContainer['default'];

});
define('ember-json-inspector/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('ember-json-inspector/controllers/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    //  jsonError: true,
    actions: {
      updatePath: function updatePath(newPath) {
        console.log('updatePath', newPath);
        this.set('propertyPath', newPath);
      },
      sampleData1: function sampleData1() {
        var obj = {
          uberAlles: [0, 1, 2, [0, 1, 2, [0, 1, 2, 3], 3], 3],
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
              wheels: 4
            }, {
              name: 'batmobile',
              wheels: 4
            }, {
              name: 'batmobile',
              wheels: 4
            }]
          }
        };
        var str = JSON.stringify(obj);
        this.set('jsontext', str);
      }
    },

    init: function init() {
      this.set('jsonError', false);
      this.send('sampleData1');
      this.set('stickyOptions', {
        getWidthFrom: '.ji-panel',
        responsiveWidth: true

      });
    },

    jsonObj: Ember['default'].computed('jsontext', function () {
      console.log('jsonObj');
      var jsonStr = this.get('jsontext');
      var oldObj = this.get('inspectThisObject');

      if (jsonStr === undefined || jsonStr === '') {
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
      } catch (e) {
        this.set('jsonError', true);
        this.set('jsonErrorMessage', e);
        // this.set('inspectThisObject', };
        return oldObj === undefined ? NaN : oldObj;
        //@todo ... Dirty Dirty Hack
        //this.set('jsontext', "{str}");
      }

      throw new Error('Not sure how I got here');
    }),

    showInspector: Ember['default'].computed('jsonObj', function () {
      console.log('showInspector');
      var jsonObj = this.get('jsonObj');
      var jsonParseIsValid = !(Ember['default'].typeOf(jsonObj) === 'number' && jsonObj !== jsonObj); //NaN !== NaN
      var showInspector = jsonParseIsValid;

      if (showInspector) {
        var margin = 10;
        this.set('jsonInputWidth', 25);

        this.set('jsonInspectorLeftMargin', margin);
        this.set('jsonInspectorCenterMargin', 10);
        this.set('jsonInspectorRightMargin', margin);
      } else {
        var margin = 30;
        this.set('jsonInputWidth', 40);
        this.set('jsonInspectorLeftMargin', margin);
        // this.set('jsonInspectorCenterMargin', 5);
        // this.set('jsonInspectorRightMargin', margin);
      }
      return showInspector;
    }),

    inspectThisObject: {}

  });

});
define('ember-json-inspector/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('ember-json-inspector/initializers/export-application-global', ['exports', 'ember', 'ember-json-inspector/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('ember-json-inspector/initializers/md-layout-views', ['exports', 'ember', 'ember-material-design/mixins/has-flex', 'ember-material-design/mixins/has-layout'], function (exports, Ember, HasFlex, HasLayout) {

  'use strict';

  exports.initialize = initialize;

  function initialize() /* container, application */{
    // We want to inject the flex and layout parameters to every element
    // so we don't need to customize each view or component to add it
    Ember['default'].View.reopen(HasFlex['default'], HasLayout['default'], {
      flex: null
    });
  }

  exports['default'] = {
    name: 'md-layout-views',
    initialize: initialize
  };

});
define('ember-json-inspector/initializers/md-link-to', ['exports', 'ember', 'ember-material-design/mixins/ripples'], function (exports, Ember, RipplesMixin) {

    'use strict';

    exports.initialize = initialize;

    function initialize() /* container, application */{
        // application.inject('route', 'foo', 'service:foo');

        // by default we will insert the ripples mixin to links,
        // but ripples will only apply if the class is named 'md-button'
        // and the 'md-no-ink' attribute isn't set
        Ember['default'].LinkView.reopen(RipplesMixin['default'], {
            didInsertElement: function didInsertElement() {
                this._super();

                var isMdButton = this.get('classNames').contains('md-button');
                if (!isMdButton || this.get('mdNoInk')) {
                    return;
                }

                var rs = this.get('rippleService');
                rs.attachButtonBehavior(this.$());
            }
        });
    }

    exports['default'] = {
        name: 'md-link-to',
        initialize: initialize
    };

});
define('ember-json-inspector/initializers/reopentextarea', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports.initialize = initialize;

  function initialize() /* container, application */{
    // application.inject('route', 'foo', 'service:foo');
    Ember['default'].TextArea.reopen({
      attributeBindings: ['layout-fill']
    });
    Ember['default'].TextField.reopen({
      attributeBindings: ['layout-fill']
    });
  }

  exports['default'] = {
    name: 'reopentextarea',
    initialize: initialize
  };

});
define('ember-json-inspector/instance-initializers/app-version', ['exports', 'ember-json-inspector/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('ember-json-inspector/mixins/json-inspector-mixin', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Mixin.create({
    actions: {
      updatePath: function updatePath(path) {
        // console.log('in:' + this.get('classNames')[1]  + ' - path: ' + path + ' - thisPath = ' + this.get('path'));
        this.sendAction('updatePath', path);
      }
    }
  });

});
define('ember-json-inspector/models/toast', ['exports', 'ember-material-design/models/toast'], function (exports, toast) {

	'use strict';



	exports['default'] = toast['default'];

});
define('ember-json-inspector/router', ['exports', 'ember', 'ember-json-inspector/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('ember-json-inspector/routes/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('ember-json-inspector/services/constants', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var Constants = Ember['default'].Service.extend({

        snifferService: Ember['default'].inject.service('sniffer'),

        webkit: Ember['default'].computed('', function () {
            return (/webkit/i.test(this.get('snifferService.vendorPrefix'))
            );
        }),

        vendorProperty: function vendorProperty(name) {
            var prefix = this.get('snifferService.vendorPrefix').toLowerCase();
            return this.get('webkit') ? '-webkit-' + name.charAt(0) + name.substring(1) : name;
        },

        MEDIA: {
            'sm': '(max-width: 600px)',
            'gt-sm': '(min-width: 600px)',
            'md': '(min-width: 600px) and (max-width: 960px)',
            'gt-md': '(min-width: 960px)',
            'lg': '(min-width: 960px) and (max-width: 1200px)',
            'gt-lg': '(min-width: 1200px)'
        },

        CSS: Ember['default'].computed('webkit', function () {
            var webkit = this.get('webkit');
            return {
                /* Constants */
                TRANSITIONEND: 'transitionend' + (webkit ? ' webkitTransitionEnd' : ''),
                ANIMATIONEND: 'animationend' + (webkit ? ' webkitAnimationEnd' : ''),

                TRANSFORM: this.vendorProperty('transform'),
                TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
                TRANSITION: this.vendorProperty('transition'),
                TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
                ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
                ANIMATION_DURATION: this.vendorProperty('animationDuration'),
                ANIMATION_NAME: this.vendorProperty('animationName'),
                ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
                ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
            };
        }),

        KEYCODE: {
            ENTER: 13,
            ESCAPE: 27,
            SPACE: 32,
            LEFT_ARROW: 37,
            UP_ARROW: 38,
            RIGHT_ARROW: 39,
            DOWN_ARROW: 40,
            TAB: 9
        },

        START_EVENTS: 'mousedown touchstart pointerdown',
        MOVE_EVENTS: 'mousemove touchmove pointermove',
        END_EVENTS: 'mouseup mouseleave touchend touchcancel pointerup pointercancel'

    });

    exports['default'] = Constants;

});
define('ember-json-inspector/services/icon', ['exports', 'ember', 'ic-ajax'], function (exports, Ember, ic_ajax) {

  'use strict';

  var config = {
    defaultIconSize: 24
  };

  var urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;

  function Icon(el, config) {
    if (el.tagName != 'svg') {
      el = Ember['default'].$('<svg xmlns="http://www.w3.org/2000/svg">').append(el)[0];
    }

    el = $(el);

    // inject the namespace if not available...
    if (!el.attr('xmlns')) {
      el.attr('xmlns', "http://www.w3.org/2000/svg");
    }

    this.element = el;
    this.config = config;
    this.prepare();
  }

  Icon.prototype = {
    clone: cloneSVG,
    prepare: prepareAndStyle
  };

  /**
   * Clone the Icon DOM element
   */
  function cloneSVG() {
    return Ember['default'].$(this.element[0].cloneNode(true));
  }

  /**
   * Prepare the DOM element that will be cached in the
   * loaded iconCache store.
   */
  function prepareAndStyle() {
    var iconSize = this.config ? this.config.iconSize : config.defaultIconSize;
    var svg = this.element;

    svg[0].setAttribute('fit', '');
    svg[0].setAttribute('height', '100%');
    svg[0].setAttribute('width', '100%');
    svg[0].setAttribute('preserveAspectRatio', 'xMidYMid meet');

    svg[0].setAttribute('viewBox', svg[0].getAttribute('viewBox') || '0 0 ' + iconSize + ' ' + iconSize);

    svg.css({
      'pointer-events': 'none',
      'display': 'block'
    });

    this.element = svg;
  }

  var IconService = Ember['default'].Service.extend({

    iconCache: {},
    templateCache: {},

    preloadIcons: function preloadIcons() {
      var _this = this;

      var svgRegistry = [{
        id: 'md-tabs-arrow',
        url: 'md-tabs-arrow.svg',
        svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'

      }, {
        id: 'md-close',
        url: 'md-close.svg',
        svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'

      }, {
        id: 'md-cancel',
        url: 'md-cancel.svg',
        svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'

      }, {
        id: 'md-toggle-arrow',
        url: 'md-toggle-arrow-svg',
        svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'

      }];

      svgRegistry.forEach(function (asset) {
        _this.icon(asset.id, asset.url);
        _this.templateCache[asset.url] = asset.svg;
      });
    },

    init: function init() {
      this._super.apply(this, arguments);
      this.preloadIcons();
    },

    getIcon: function getIcon(id) {
      id = id || '';

      // if already loaded and cached, use a clone of the cached icon.
      if (config[id]) {
        return Ember['default'].RSVP.Promise.resolve(config[id].clone());
      }

      if (urlRegex.test(id)) {
        return this.loadByURL(id).then(this.cacheIcon(id));
      }

      if (id.indexOf(':') == -1) {
        id = '$default:' + id;
      }

      return this.loadByID(id)['catch'](Ember['default'].run.bind(this, this.loadFromIconSet))['catch'](this.announceIdNotFound)['catch'](this.announceNotFound).then(this.cacheIcon(id));
    },

    icon: function icon(id, url, iconSize) {
      if (id.indexOf(':') == -1) {
        id = '$default:' + id;
      }

      config[id] = {
        url: url,
        iconSize: iconSize || config.defaultIconSize
      };
    },

    iconSet: function iconSet(id, url, iconSize) {
      config[id] = {
        url: url,
        iconSize: iconSize || config.defaultIconSize
      };
    },

    defaultIconSet: function defaultIconSet(url, iconSize) {
      var setName = '$default';

      if (!config[setName]) {
        config[setName] = {
          url: url,
          iconSize: iconSize || config.defaultIconSize
        };
      }
    },

    loadByID: function loadByID(id) {
      var iconConfig = config[id];

      return !iconConfig ? Ember['default'].RSVP.Promise.reject(id) : this.loadByURL(iconConfig.url).then(function (icon) {
        return new Icon(icon, iconConfig);
      });
    },

    loadFromIconSet: function loadFromIconSet(id) {
      var setName = id.substring(0, id.lastIndexOf(':')) || '$default';
      var iconSetConfig = config[setName];

      return !iconSetConfig ? Ember['default'].RSVP.Promise.reject(id) : this.loadByURL(iconSetConfig.url).then(extractFromSet);

      function extractFromSet(set) {
        var iconName = id.slice(id.lastIndexOf(':') + 1);
        var icon = set.querySelector('#' + iconName);
        return !icon ? Ember['default'].RSVP.Promise.reject(id) : new Icon(icon, iconSetConfig);
      }
    },

    loadByURL: function loadByURL(url) {

      // first check templateCache

      var req;

      if (this.templateCache[url]) {
        req = Ember['default'].RSVP.Promise.resolve(this.templateCache[url]);
      } else {
        req = ic_ajax.raw(url, {
          dataType: 'text'
        });
      }

      return req.then(function (response) {
        // if its an actual ajax request, just get the response text
        if (response.jqXHR) {
          response = response.jqXHR.responseText;
        }
        var els = Ember['default'].$(response);

        for (var i = 0; i < els.length; ++i) {
          if (els[i].nodeName === 'svg') {
            return els[i];
          }
        }
      });
    },

    announceIdNotFound: function announceIdNotFound(id) {
      var msg;

      if (typeof id === 'string') {
        msg = 'icon ' + id + ' not found';
        Ember['default'].Logger.log(msg);
      }

      return Ember['default'].RSVP.Promise.reject(msg || id);
    },

    announceNotFound: function announceNotFound(err) {
      var msg = typeof err === 'string' ? err : err.message || err.data || err.statusText;

      return Ember['default'].RSVP.Promise.reject(msg);
    },

    isIcon: function isIcon(target) {
      return typeof target.element !== 'undefined' && typeof target.config !== 'undefined';
    },

    cacheIcon: function cacheIcon(id) {
      var self = this;
      return function updateCache(icon) {
        self.iconCache[id] = self.isIcon(icon) ? icon : new Icon(icon, config[id]);

        return self.iconCache[id].clone();
      };
    }

  });

  exports['default'] = IconService;

});
define('ember-json-inspector/services/media-queries', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MediaQueriesService = Ember['default'].Service.extend({

    matches: Ember['default'].computed(function () {
      return Ember['default'].A();
    }),

    /**
     * A hash of listeners
     */
    listeners: {},

    /**
     * The matcher to use for testing media queries
     */
    mql: window.matchMedia,

    match: function match(name, query) {
      var _this = this;

      var classify = Ember['default'].String.classify,
          matcher = (this.get('mql') || window.matchMedia)(query),
          isser = 'is' + classify(name);

      var listener = function listener(matcher) {
        _this.set(name, matcher);
        _this.set(isser, matcher.matches);

        if (matcher.matches) {
          _this.get('matches').addObject(name);
        } else {
          _this.get('matches').removeObject(name);
        }
      };

      this.get('listeners')[name] = listener;

      if (matcher.addListener) {
        matcher.addListener(function (matcher) {
          Ember['default'].run(null, listener, matcher);
        });
      }

      listener(matcher);
    }

  });

  exports['default'] = MediaQueriesService;

});
define('ember-json-inspector/services/ripple', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    function rgbToRGBA(color) {
        return color.replace(')', ', 0.1)').replace('(', 'a(');
    }

    /**
     * Converts rgba string to rgb, removing the alpha value
     *
     * @param {string} color rgba color
     *
     * @returns {string} rgb color
     */
    function rgbaToRGB(color) {
        return color.replace('rgba', 'rgb').replace(/,[^\)\,]+\)/, ')');
    }

    /**
     * Converts a hex value to an rgba string
     *
     * @param {string} color hex value (3 or 6 digits) to be converted
     *
     * @returns {string} rgba color with 0.1 alpha
     */
    function hexToRGBA(color) {
        var hex = color.chartAt(0) === '#' ? color.substr(1) : color,
            dig = hex.length / 3,
            red = hex.substr(0, dig),
            grn = hex.substr(dig, dig),
            blu = hex.substr(dig * 2);

        if (dig === 1) {
            red += red;
            grn += grn;
            blu += blu;
        }

        return 'rgba(' + parseInt(red, 16) + ',' + parseInt(grn, 16) + ',' + parseInt(blu, 16) + ',0.1)';
    }

    /**
     * Converts any color string to an rgba string
     *
     * @param {string} color color string to parse
     *
     * @returns {string} rgba color with 0.1 alpha
     */
    function parseColor(color) {
        if (!color) {
            return;
        }
        if (color.indexOf('rgba') === 0) {
            return color.replace(/\d?\.?\d*\s*\)\s*$/, '0.1)');
        }
        if (color.indexOf('rgb') === 0) {
            return rgbToRGBA(color);
        }
        if (color.indexOf('#') === 0) {
            return hexToRGBA(color);
        }
    }

    var RippleService = Ember['default'].Service.extend({

        constants: Ember['default'].inject.service('constants'),

        setupCheckbox: function setupCheckbox(component, element) {
            if (component.get('mdNoInk')) {
                return;
            }
            this.attachCheckboxBehavior(element);
        },

        setupButton: function setupButton(component, element) {
            if (component.get('mdNoInk')) {
                return;
            }
            this.attachButtonBehavior(element);
        },

        setupTab: function setupTab(component, element) {
            if (component.get('mdNoInk')) {
                return;
            }
            this.attachTabBehavior(element);
        },

        attachButtonBehavior: function attachButtonBehavior(element, options) {
            return this.attach(element, $.extend({
                fullRipple: true,
                isMenuItem: element.hasClass('md-menu-item'),
                center: false,
                dimBackground: true
            }, options));
        },

        attachCheckboxBehavior: function attachCheckboxBehavior(element, options) {
            return this.attach(element, Ember['default'].merge({
                center: true,
                dimBackground: false,
                fitRipple: true
            }, options));
        },

        attachTabBehavior: function attachTabBehavior(element, options) {
            return this.attach(element, Ember['default'].merge({
                center: false,
                dimBackground: true,
                outline: false,
                rippleSize: 'full'
            }, options));
        },

        attachListControlBehavior: function attachListControlBehavior(element, options) {
            return this.attach(element, Ember['default'].merge({
                center: false,
                dimBackground: true,
                outline: false,
                rippleSize: 'full'
            }, options));
        },

        attach: function attach(element, options) {

            // check if element has md-no-ink attribute
            if (element[0].hasAttribute('mdNoInk')) {
                return Ember['default'].K;
            }

            options = Ember['default'].merge({
                colorElement: element,
                mousedown: true,
                hover: true,
                touch: true,
                center: false,
                mousedownPauseTime: 150,
                dimBackground: false,
                outline: false,
                fullRipple: true,
                isMenuItem: false,
                fitRipple: false

            }, options);

            var rippleSize,
                counter = 0,
                ripples = [],
                states = [],
                isActiveExpr = element.attr('md-highlight'),
                isActive = false,
                isHeld = false,
                node = element[0],
                rippleSizeSetting = element.attr('md-ripple-size'),
                color = parseColor(element.attr('md-ink-ripple')) || parseColor(options.colorElement.length && window.getComputedStyle(options.colorElement[0]).color || 'rgb(0, 0, 0)');

            switch (rippleSizeSetting) {
                case 'full':
                    options.fullRipple = true;
                    break;
                case 'partial':
                    options.fullRipple = false;
                    break;
            }

            if (options.mousedown) {
                element.on(this.get('constants.START_EVENTS'), onPressDown).on(this.get('constants.END_EVENTS'), onPressUp);
            }

            function getRippleContainer() {
                var container = element.data('$mdRippleContainer');

                if (container) {
                    return container;
                }

                container = Ember['default'].$('<div class="md-ripple-container">');
                element.append(container);
                element.data('$mdRippleContainer', container);
                return container;
            }

            function removeElement(elem, wait) {
                ripples.splice(ripples.indexOf(elem), 1);
                if (ripples.length === 0) {
                    getRippleContainer().css({ backgroundColor: '' });
                }

                Ember['default'].run.later(this, function () {
                    elem.remove();
                }, wait);
            }

            function updateElement(elem) {
                var index = ripples.indexOf(elem),
                    state = states[index] || {},
                    elemIsActive = ripples.length > 1 ? false : isActive,
                    elemIsHeld = ripples.length > 1 ? false : isHeld;

                if (elemIsActive || state.animating || elemIsHeld) {
                    elem.addClass('md-ripple-visible');
                } else if (elem) {
                    elem.removeClass('md-ripple-visible');

                    if (options.outline) {
                        elem.css({
                            width: rippleSize + 'px',
                            height: rippleSize + 'px',
                            marginLeft: rippleSize * -1 + 'px',
                            marginTop: rippleSize * -1 + 'px'
                        });
                    }

                    removeElement(elem, options.outline ? 450 : 650);
                }
            }

            /**
             * Creates a ripple at the provided coordinates
             *
             * @param {number} left left cursor position
             * @param {number} top top cursor position
             *
             * @returns {*|jQuery|HTMLElement} the generated ripple element
             */
            function createRipple(left, top) {
                var _this = this;

                color = parseColor(element.attr('md-ink-ripple')) || parseColor(window.getComputedStyle(options.colorElement[0]).color || 'rgb(0, 0, 0)');

                var container = getRippleContainer(),
                    size = getRippleSize(left, top),
                    css = getRippleCss(size, left, top),
                    elem = getRippleElement(css),
                    index = ripples.indexOf(elem),
                    state = states[index] || {};

                rippleSize = size;

                state.animating = true;

                Ember['default'].run.schedule('render', this, function () {
                    if (options.dimBackground) {
                        container.css({ backgroundColor: color });
                    }

                    elem.addClass('md-ripple-placed md-ripple-scaled');
                    if (options.outline) {
                        elem.css({
                            borderWidth: size * 0.5 + 'px',
                            marginLeft: size * -0.5 + 'px',
                            marginTop: size * -0.5 + 'px'
                        });
                    } else {
                        elem.css({ left: '50%', top: '50% ' });
                    }

                    updateElement(elem);

                    Ember['default'].run.later(_this, function () {
                        state.animating = false;
                        updateElement(elem);
                    }, options.outline ? 450 : 225);
                });

                return elem;

                /**
                 * Creates the ripple element with the provided css
                 *
                 * @param {object} css properties to be applied
                 *
                 * @returns {*|jQuery|HTMLElement} the generated ripple element
                 */
                function getRippleElement(css) {
                    var elem = Ember['default'].$('<div class="md-ripple" data-counter="' + counter++ + '">');
                    ripples.unshift(elem);
                    states.unshift({ animating: true });
                    container.append(elem);
                    css && elem.css(css);
                    return elem;
                }

                /**
                 * Calculate the ripple size
                 * @param left
                 * @param top
                 * @returns {number} calculated ripple diameter
                 */
                function getRippleSize(left, top) {
                    var width = container.prop('offsetWidth'),
                        height = container.prop('offsetHeight'),
                        multiplier,
                        size,
                        rect;

                    if (options.isMenuItem) {
                        size = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                    } else if (options.outline) {
                        rect = node.getBoundingClientRect();
                        left -= rect.left;
                        top -= rect.top;
                        width = Math.max(left, width - left);
                        height = Math.max(top, height - top);
                        size = 2 * Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                    } else {
                        multiplier = options.fullRipple ? 1.1 : 0.8;
                        size = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) * multiplier;
                        if (options.fitRipple) {
                            size = Math.min(height, width, size);
                        }
                    }

                    return size;
                }

                /**
                 * Generates the ripple css
                 *
                 * @param {number} size the diameter of the ripple
                 * @param {number} left the left cursor offset
                 * @param {number} top the top cursor offset
                 *
                 * @returns {{backgroundColor: string, borderColor: string, width: string, height: string}}
                 */
                function getRippleCss(size, left, top) {
                    var rect = node.getBoundingClientRect(),
                        css = {
                        backgroundColor: rgbaToRGB(color),
                        borderColor: rgbaToRGB(color),
                        width: size + 'px',
                        height: size + 'px'
                    };

                    if (options.outline) {
                        css.width = 0;
                        css.height = 0;
                    } else {
                        css.marginLeft = css.marginTop = size * -0.5 + 'px';
                    }

                    if (options.center) {
                        css.left = css.top = '50%';
                    } else {
                        css.left = Math.round((left - rect.left) / container.prop('offsetWidth') * 100) + '%';
                        css.top = Math.round((top - rect.top) / container.prop('offsetHeight') * 100) + '%';
                    }

                    return css;
                }
            }

            function onPressDown(ev) {

                if (!isRippleAllowed()) {
                    return;
                }

                var x = ev.clientX || ev.originalEvent.touches[0].clientX,
                    y = ev.clientY || ev.originalEvent.touches[0].clientY;

                var ripple = createRipple(x, y);
                isHeld = true;
            }

            function isRippleAllowed() {
                var parent = node.parentNode;
                var grandparent = parent && parent.parentNode;
                var ancestor = grandparent && grandparent.parentNode;
                return !isDisabled(node) && !isDisabled(parent) && !isDisabled(grandparent) && !isDisabled(ancestor);

                function isDisabled(elem) {
                    return elem && elem.hasAttribute && elem.hasAttribute('disabled');
                }
            }

            function onPressUp(ev) {
                isHeld = false;
                var ripple = ripples[ripples.length - 1];

                updateElement(ripple);
            }
        }

    });

    exports['default'] = RippleService;

});
define('ember-json-inspector/services/sniffer', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var isString = function isString(value) {
        return typeof value === 'string';
    };

    var lowercase = function lowercase(string) {
        return isString(string) ? string.toLowerCase() : string;
    };

    function toInt(str) {
        return parseInt(str, 10);
    }

    var SnifferService = Ember['default'].Service.extend({
        vendorPrefix: '',
        transitions: false,
        animations: false,
        document: document,
        window: window,

        android: Ember['default'].computed('', function () {
            return toInt((/android (\d+)/.exec(lowercase((this.get('window').navigator || {}).userAgent)) || [])[1]);
        }),

        init: function init() {
            this._super.apply(this, arguments);

            var bodyStyle = this.get('document').body && this.get('document').body.style;
            var vendorPrefix;
            var vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;

            var transitions = false;
            var animations = false;
            var match;

            if (bodyStyle) {
                for (var prop in bodyStyle) {
                    if (match = vendorRegex.exec(prop)) {
                        vendorPrefix = match[0];
                        vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
                        break;
                    }
                }

                if (!vendorPrefix) {
                    vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
                }

                transitions = !!('transition' in bodyStyle || vendorPrefix + 'Transition' in bodyStyle);
                animations = !!('animation' in bodyStyle || vendorPrefix + 'Animation' in bodyStyle);

                if (this.get('android') && (!transitions || !animations)) {
                    transitions = isString(bodyStyle.webkitTransition);
                    animations = isString(bodyStyle.webkitAnimation);
                }
            }

            this.set('transitions', transitions);
            this.set('animations', animations);

            this.set('vendorPrefix', vendorPrefix);
        }

    });

    exports['default'] = SnifferService;

});
define('ember-json-inspector/services/toasts', ['exports', 'ember-material-design/services/toasts'], function (exports, toasts) {

	'use strict';



	exports['default'] = toasts['default'];

});
define('ember-json-inspector/services/utility', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    function getNode(el) {
        return el[0] || el;
    }

    var UtilityService = Ember['default'].Service.extend({

        clientRect: function clientRect(element, offsetParent, isOffsetRect) {
            var node = getNode(element);
            offsetParent = getNode(offsetParent || node.offsetParent || document.body);
            var nodeRect = node.getBoundingClientRect();

            var offsetRect = isOffsetRect ? offsetParent.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };

            return {
                left: nodeRect.left - offsetRect.left,
                top: nodeRect.top - offsetRect.top,
                width: nodeRect.width,
                height: nodeRect.height
            };
        },

        offsetRect: function offsetRect(element, offsetParent) {
            return this.clientRect(element, offsetParent, true);
        }

    });

    exports['default'] = UtilityService;

});
define('ember-json-inspector/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-json-inspector/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('ember-json-inspector/templates/components/material-design-icon', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-json-inspector/templates/components/material-design-icon.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,0],[1,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('ember-json-inspector/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 18,
              "column": 8
            }
          },
          "moduleName": "ember-json-inspector/templates/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-warn");
          var el2 = dom.createTextNode("\n                Bad JSON\n\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"layout-padding","");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]),1,1);
          return morphs;
        },
        statements: [
          ["content","jsonErrorMessage",["loc",[null,[15,16],[15,36]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 8
            },
            "end": {
              "line": 24,
              "column": 8
            }
          },
          "moduleName": "ember-json-inspector/templates/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            Sample Data\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 36,
                "column": 8
              },
              "end": {
                "line": 43,
                "column": 8
              }
            },
            "moduleName": "ember-json-inspector/templates/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","propertyPath");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","md-whiteframe-z2");
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]),1,1);
            return morphs;
          },
          statements: [
            ["inline","input",[],["value",["subexpr","@mut",[["get","propertyPath",["loc",[null,[40,34],[40,46]]]]],[],[]]],["loc",[null,[40,20],[40,48]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 4
            },
            "end": {
              "line": 56,
              "column": 4
            }
          },
          "moduleName": "ember-json-inspector/templates/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","ji-panel");
          dom.setAttribute(el1,"layout","column");
          dom.setAttribute(el1,"flex","");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          dom.setAttribute(el2,"class","md-title");
          var el3 = dom.createTextNode("JSON Inspector");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","md-whiteframe-z2");
          dom.setAttribute(el2,"layout-padding","");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n    ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(fragment, [3]);
          var element2 = dom.childAt(fragment, [5]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'flex');
          morphs[1] = dom.createMorphAt(element1,4,4);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [6]),1,1);
          morphs[3] = dom.createAttrMorph(element2, 'flex');
          return morphs;
        },
        statements: [
          ["attribute","flex",["concat",[["get","jsonInspectorCenterMargin",["loc",[null,[29,17],[29,42]]]]]]],
          ["block","sticky-container",[],["options",["subexpr","@mut",[["get","stickyOptions",["loc",[null,[36,36],[36,49]]]]],[],[]]],0,null,["loc",[null,[36,8],[43,29]]]],
          ["inline","json-inspector",[],["inspectThis",["subexpr","@mut",[["get","inspectThisObject",["loc",[null,[46,41],[46,58]]]]],[],[]],"updatePath","updatePath"],["loc",[null,[46,12],[46,84]]]],
          ["attribute","flex",["concat",[["get","jsonInspectorRightMargin",["loc",[null,[51,17],[51,41]]]]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 60,
            "column": 0
          }
        },
        "moduleName": "ember-json-inspector/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"layout-align","center");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2,"id","title");
        var el3 = dom.createTextNode("Ember JSON Inspector");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"layout","row");
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3,"class","md-title");
        var el4 = dom.createTextNode("JSON Text");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [3]);
        var element4 = dom.childAt(element3, [1]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element4, 'flex');
        morphs[1] = dom.createAttrMorph(element4, 'offset');
        morphs[2] = dom.createMorphAt(element4,3,3);
        morphs[3] = dom.createMorphAt(element4,5,5);
        morphs[4] = dom.createMorphAt(element4,7,7);
        morphs[5] = dom.createMorphAt(element3,3,3);
        morphs[6] = dom.createMorphAt(fragment,5,5,contextualElement);
        return morphs;
      },
      statements: [
        ["attribute","flex",["concat",[["get","jsonInputWidth",["loc",[null,[8,17],[8,31]]]]]]],
        ["attribute","offset",["concat",[["get","jsonInspectorLeftMargin",["loc",[null,[8,45],[8,68]]]]]]],
        ["block","if",[["get","jsonError",["loc",[null,[10,14],[10,23]]]]],[],0,null,["loc",[null,[10,8],[18,15]]]],
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","jsontext",["loc",[null,[20,25],[20,33]]]]],[],[]],"layout-fill","","rows","10","class","jsonInput"],["loc",[null,[20,8],[20,78]]]],
        ["block","md-button",[],["class","md-raised md-primary","action","sampleData1","bubbles",false],1,null,["loc",[null,[22,8],[24,22]]]],
        ["block","if",[["get","showInspector",["loc",[null,[27,10],[27,23]]]]],[],2,null,["loc",[null,[27,4],[56,12]]]],
        ["content","outlet",["loc",[null,[59,0],[59,10]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('ember-json-inspector/tests/1pods/components/json-inspector-array/component.jshint', function () {

  'use strict';

  module('JSHint - 1pods/components/json-inspector-array');
  test('1pods/components/json-inspector-array/component.js should pass jshint', function() { 
    ok(true, '1pods/components/json-inspector-array/component.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/1pods/components/json-inspector-object/component.jshint', function () {

  'use strict';

  module('JSHint - 1pods/components/json-inspector-object');
  test('1pods/components/json-inspector-object/component.js should pass jshint', function() { 
    ok(true, '1pods/components/json-inspector-object/component.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/1pods/components/json-inspector-primitive/component.jshint', function () {

  'use strict';

  module('JSHint - 1pods/components/json-inspector-primitive');
  test('1pods/components/json-inspector-primitive/component.js should pass jshint', function() { 
    ok(true, '1pods/components/json-inspector-primitive/component.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/1pods/components/json-inspector/component.jshint', function () {

  'use strict';

  module('JSHint - 1pods/components/json-inspector');
  test('1pods/components/json-inspector/component.js should pass jshint', function() { 
    ok(true, '1pods/components/json-inspector/component.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/controllers/index.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/index.js should pass jshint', function() { 
    ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 97, col 18, \'margin\' is already defined.\n\n1 error'); 
  });

});
define('ember-json-inspector/tests/helpers/resolver', ['exports', 'ember/resolver', 'ember-json-inspector/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('ember-json-inspector/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/helpers/start-app', ['exports', 'ember', 'ember-json-inspector/app', 'ember-json-inspector/router', 'ember-json-inspector/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('ember-json-inspector/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/initializers/reopentextarea.jshint', function () {

  'use strict';

  module('JSHint - initializers');
  test('initializers/reopentextarea.js should pass jshint', function() { 
    ok(true, 'initializers/reopentextarea.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/mixins/json-inspector-mixin.jshint', function () {

  'use strict';

  module('JSHint - mixins');
  test('mixins/json-inspector-mixin.js should pass jshint', function() { 
    ok(true, 'mixins/json-inspector-mixin.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/routes/index.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/index.js should pass jshint', function() { 
    ok(true, 'routes/index.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/test-helper', ['ember-json-inspector/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('ember-json-inspector/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/unit/1pods/components/json-inspector-array/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('json-inspector-array', 'Unit | Component | json inspector array', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

});
define('ember-json-inspector/tests/unit/1pods/components/json-inspector-array/component-test.jshint', function () {

  'use strict';

  module('JSHint - unit/1pods/components/json-inspector-array');
  test('unit/1pods/components/json-inspector-array/component-test.js should pass jshint', function() { 
    ok(true, 'unit/1pods/components/json-inspector-array/component-test.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/unit/1pods/components/json-inspector-object/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('json-inspector-object', 'Unit | Component | json inspector object', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

});
define('ember-json-inspector/tests/unit/1pods/components/json-inspector-object/component-test.jshint', function () {

  'use strict';

  module('JSHint - unit/1pods/components/json-inspector-object');
  test('unit/1pods/components/json-inspector-object/component-test.js should pass jshint', function() { 
    ok(true, 'unit/1pods/components/json-inspector-object/component-test.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/unit/1pods/components/json-inspector-primitive/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('json-inspector-primitive', 'Unit | Component | json inspector primitive', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

});
define('ember-json-inspector/tests/unit/1pods/components/json-inspector-primitive/component-test.jshint', function () {

  'use strict';

  module('JSHint - unit/1pods/components/json-inspector-primitive');
  test('unit/1pods/components/json-inspector-primitive/component-test.js should pass jshint', function() { 
    ok(true, 'unit/1pods/components/json-inspector-primitive/component-test.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/unit/1pods/components/json-inspector/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('json-inspector', 'Unit | Component | json inspector', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

});
define('ember-json-inspector/tests/unit/1pods/components/json-inspector/component-test.jshint', function () {

  'use strict';

  module('JSHint - unit/1pods/components/json-inspector');
  test('unit/1pods/components/json-inspector/component-test.js should pass jshint', function() { 
    ok(true, 'unit/1pods/components/json-inspector/component-test.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/unit/1pods/index/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('ember-json-inspector/tests/unit/1pods/index/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/1pods/index');
  test('unit/1pods/index/route-test.js should pass jshint', function() { 
    ok(true, 'unit/1pods/index/route-test.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/unit/initializers/reopentextarea-test', ['ember', 'ember-json-inspector/initializers/reopentextarea', 'qunit'], function (Ember, reopentextarea, qunit) {

  'use strict';

  var container, application;

  qunit.module('Unit | Initializer | reopentextarea', {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        container = application.__container__;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    reopentextarea.initialize(container, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});
define('ember-json-inspector/tests/unit/initializers/reopentextarea-test.jshint', function () {

  'use strict';

  module('JSHint - unit/initializers');
  test('unit/initializers/reopentextarea-test.js should pass jshint', function() { 
    ok(true, 'unit/initializers/reopentextarea-test.js should pass jshint.'); 
  });

});
define('ember-json-inspector/tests/unit/mixins/json-inspector-mixin-test', ['ember', 'ember-json-inspector/mixins/json-inspector-mixin', 'qunit'], function (Ember, JsonInspectorMixinMixin, qunit) {

  'use strict';

  qunit.module('Unit | Mixin | json inspector mixin');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var JsonInspectorMixinObject = Ember['default'].Object.extend(JsonInspectorMixinMixin['default']);
    var subject = JsonInspectorMixinObject.create();
    assert.ok(subject);
  });

});
define('ember-json-inspector/tests/unit/mixins/json-inspector-mixin-test.jshint', function () {

  'use strict';

  module('JSHint - unit/mixins');
  test('unit/mixins/json-inspector-mixin-test.js should pass jshint', function() { 
    ok(true, 'unit/mixins/json-inspector-mixin-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('ember-json-inspector/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-json-inspector';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("ember-json-inspector/tests/test-helper");
} else {
  require("ember-json-inspector/app")["default"].create({"name":"ember-json-inspector","version":"0.0.0+891a3ba2"});
}

/* jshint ignore:end */
//# sourceMappingURL=ember-json-inspector.map