"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function newModule(_options) {
    return (tree, _context) => {
        const workspaceConfig = tree.read('/angular.json');
        if (!workspaceConfig) {
            throw new schematics_1.SchematicsException('Could not find Angular workspace configuration');
        }
        // convert workspace to string
        const workspaceContent = workspaceConfig.toString();
        // parse workspace string into JSON object
        const workspace = JSON.parse(workspaceContent);
        if (!_options.project) {
            _options.project = workspace.projects[1];
        }
        console.log(_options.project);
        return tree;
    };
}
exports.newModule = newModule;
//# sourceMappingURL=index.js.map