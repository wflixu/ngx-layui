// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {LaTestComponent} from './test.component';

export default {
  title: 'Example/Test',
  component: LaTestComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LaTestComponent> = (args: LaTestComponent) => ({
  component: LaTestComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'test test',
};
