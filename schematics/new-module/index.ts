import { Rule, SchematicContext, Tree, SchematicsException } from '@angular-devkit/schematics';
import { experimental } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function newModule(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
      throw new SchematicsException(
        'Could not find Angular workspace configuration'
      );
    }

    // convert workspace to string
    const workspaceContent = workspaceConfig.toString();

    // parse workspace string into JSON object
    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(
      workspaceContent
    );
    if (!_options.project) {
      _options.project = 'lay';
    }
    console.log( _options.project);

    return tree;
  };
}
