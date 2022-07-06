import { ComponentMeta, ComponentStory } from '@storybook/react';
import Mobile, { IMobile } from './Mobile';
import { mockMobileProps } from './Mobile.mocks';

export default {
  title: 'templates/Mobile',
  component: Mobile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Mobile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Mobile> = (args) => <Mobile {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMobileProps.base,
} as IMobile;
