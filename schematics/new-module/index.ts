import { Rule, SchematicContext, Tree, SchematicsException, apply, url, applyTemplates, move, chain, mergeWith } from '@angular-devkit/schematics';
import { experimental, strings, normalize } from '@angular-devkit/core';


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
    console.log( workspace.defaultProject);
    _options.type = 'Component';
    _options.style = 'less';

    const projectName = _options.project as string;

    const project = workspace.projects[projectName];


    if (_options.path === undefined) {
      _options.path = `${project.sourceRoot}/${_options.name}`;
    }

    let selector = strings.dasherize(_options.name);

    _options.selector =  `la-${selector}`;

    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        ..._options
      }),
      move(normalize(_options.path as string))
    ]);

    return chain([
      mergeWith(templateSource)
    ]);
  };
}

