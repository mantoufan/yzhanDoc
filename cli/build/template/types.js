"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function genTypesTemplate(name) {
    var propsTypeName = (0, utils_1.upperFirst)(name) + 'Props';
    var propsName = name + 'Props';
    return "import { ExtractPropTypes, PropType } from 'vue'\n\nexport const ".concat(propsName, " = {} as const\nexport type ").concat(propsTypeName, " = ExtractPropTypes<typeof ").concat(propsName, ">\n");
}
exports.default = genTypesTemplate;
