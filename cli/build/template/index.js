"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function gentIndexTemplate(name) {
    var componentName = (0, utils_1.upperFirst)(name);
    return "import { App } from 'vue'\nimport ".concat(componentName, " from './src/").concat(name, "'\n\nexport { ").concat(componentName, " }\n\nexport default {\n  install(app: App) {\n    app.component(").concat(componentName, ".name, ").concat(componentName, ")\n  }\n}\n");
}
exports.default = gentIndexTemplate;
