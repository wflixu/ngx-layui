// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {LaAlertComponent} from './alert.component';

export default {
  title: 'Example/Alert',
  component: LaAlertComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LaAlertComponent> = (args: LaAlertComponent) => ({
  component: LaAlertComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'alert test',
};
