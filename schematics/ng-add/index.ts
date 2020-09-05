import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

// Just return the tree
export function ngAdd(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log('!!!!!!!!!!');
    _context.addTask(new NodePackageInstallTask());

    return tree;
  };
}
