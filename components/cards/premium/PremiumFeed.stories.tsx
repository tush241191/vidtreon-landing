import { ComponentMeta, ComponentStory } from '@storybook/react';
import PremiumFeed, { IPremiumFeed } from './PremiumFeed';
import { mockPremiumFeedProps } from './PremiumFeed.mocks';

export default {
  title: 'templates/PremiumFeed',
  component: PremiumFeed,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PremiumFeed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PremiumFeed> = (args) => (
  <PremiumFeed {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPremiumFeedProps.base,
} as IPremiumFeed;
