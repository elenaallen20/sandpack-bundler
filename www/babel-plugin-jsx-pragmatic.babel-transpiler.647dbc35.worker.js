this.webpackChunk(["babel-plugin-jsx-pragmatic"],{"../../node_modules/babel-plugin-jsx-pragmatic/jsx-pragmatic.js":function(t,e,i){t.exports=function(t){var e,n=t.types;return e={Program:{exit:function(t,e){e.get("jsxDetected")&&t.unshiftContainer("body",function(t){return n.importDeclaration([n.importSpecifier(n.identifier(t.opts.import),n.identifier(t.opts.export||"default"))],n.stringLiteral(t.opts.module))}(e))}},JSXElement:function(t,e){e.set("jsxDetected",!0)}},{pre:function(){if(!this.opts.module||!this.opts.import)throw new Error("babel-plugin-jsx-pragmatic: You must specify `module` and `import`")},inherits:i("../../node_modules/babel-plugin-syntax-jsx/lib/index.js"),visitor:e}}},"../../node_modules/babel-plugin-syntax-jsx/lib/index.js":function(t,e,i){"use strict";e.__esModule=!0,e.default=function(){return{manipulateOptions:function(t,e){e.plugins.push("jsx")}}},t.exports=e.default}});
//# sourceMappingURL=babel-plugin-jsx-pragmatic.babel-transpiler.647dbc35.worker.js.map