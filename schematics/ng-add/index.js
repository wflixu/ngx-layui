"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
// Just return the tree
function ngAdd(_options) {
    return (tree, _context) => {
        console.log('!!!!!!!!!!');
        _context.addTask(new tasks_1.NodePackageInstallTask());
        return tree;
    };
}
exports.ngAdd = ngAdd;
//# sourceMappingURL=index.js.map