"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var kolorist_1 = require("kolorist");
var core_1 = require("../template/core");
var types_1 = require("../template/types");
var style_1 = require("../template/style");
var test_1 = require("../template/test");
var template_1 = require("../template");
function createComponent(meta) {
    var name = meta.name;
    // 拼接组件目录
    var componentDir = (0, path_1.resolve)(__dirname, '../../../src', name);
    // 其它核心文件：目录源文件、类型、样式、测试
    var srcDir = (0, path_1.resolve)(componentDir, 'src');
    var styleDir = (0, path_1.resolve)(componentDir, 'style');
    var testDir = (0, path_1.resolve)(componentDir, 'test');
    (0, fs_extra_1.ensureDirSync)(srcDir);
    (0, fs_extra_1.ensureDirSync)(styleDir);
    (0, fs_extra_1.ensureDirSync)(testDir);
    // 文件和内容创建
    // 核心文件：组件文件
    var coreFilePath = (0, path_1.resolve)(srcDir, name) + '.tsx';
    (0, fs_extra_1.writeFileSync)(coreFilePath, (0, core_1.default)(name));
    // 核心文件：类型文件
    var typesFilePath = (0, path_1.resolve)(srcDir, name) + '-type.tsx';
    (0, fs_extra_1.writeFileSync)(typesFilePath, (0, types_1.default)(name));
    // 核心文件：样式文件
    var styleFilePath = (0, path_1.resolve)(styleDir, name) + '.scss';
    (0, fs_extra_1.writeFileSync)(styleFilePath, (0, style_1.genStyleTemplate)(name));
    // 核心文件：测试文件
    var testFilePath = (0, path_1.resolve)(testDir, name) + '.test.tsx';
    (0, fs_extra_1.writeFileSync)(testFilePath, (0, test_1.default)(name));
    // 核心文件：索引文件
    var indexFilePath = componentDir + '/index.tsx';
    (0, fs_extra_1.writeFileSync)(indexFilePath, (0, template_1.default)(name));
    // 创建成功通知
    console.log((0, kolorist_1.lightGreen)("\u221A \u521B\u5EFA\u6210\u529F: ".concat((0, kolorist_1.lightBlue)(name))));
    console.log((0, kolorist_1.lightBlue)("\u221A \u7EC4\u4EF6\u76EE\u5F55: ".concat((0, kolorist_1.lightBlue)(componentDir))));
}
exports.default = createComponent;
