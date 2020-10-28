
import { Story, Meta } from '@storybook/angular/types-6-0';
import {LaButtonComponent} from './button.component';

export default {
  title: 'Example/Button',
  component: LaButtonComponent,
  // decorators: [
  //   (storyFunc) => {
  //     const story = storyFunc();

  //     return {
  //       ...story,
  //       template: `<div style="margin: 3em">${story.template}</div>`,
  //     };
  //   },
  // ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LaButtonComponent> = (args: LaButtonComponent) => ({
  component: LaButtonComponent,
  moduleMetadata: {
    declarations: [LaButtonComponent],
  },
  props: args,
  template: `<button la-button >la-button</button>`,
});

export const Basic = Template.bind({});
Basic.args = {

};

