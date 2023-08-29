"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function genCoreTemplate(name) {
    var calssName = 's-' + name;
    var ComponentName = 'S' + (0, utils_1.upperFirst)(name);
    var propsTypeName = (0, utils_1.upperFirst)(name) + 'Props';
    var propsName = name + 'Props';
    var propsFileName = name + '-type';
    return "import { defineComponent, toRefs } from 'vue'\nimport { ".concat(propsTypeName, ", ").concat(propsName, " } from './").concat(propsFileName, "'\nexport default defineComponent({\n  name: '").concat(ComponentName, "',\n  props: ").concat(propsName, ",\n  setup(props: ").concat(propsTypeName, ") {\n    return () => {\n      <div class=\"").concat(calssName, "\"></div>\n    }\n  }\n})");
}
exports.default = genCoreTemplate;
