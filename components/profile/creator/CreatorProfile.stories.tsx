import { ComponentMeta, ComponentStory } from '@storybook/react';
import CreatorProfile, { ICreatorProfile } from './CreatorProfile';
import { mockCreatorProfileProps } from './CreatorProfile.mocks';

export default {
  title: 'templates/CreatorProfile',
  component: CreatorProfile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CreatorProfile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CreatorProfile> = (args) => (
  <CreatorProfile {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCreatorProfileProps.base,
} as ICreatorProfile;
