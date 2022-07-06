import { ComponentMeta, ComponentStory } from '@storybook/react';
import FeedCard, { IFeedCard } from './FeedCard';
import { mockFeedCardProps } from './FeedCard.mocks';

export default {
  title: 'templates/FeedCard',
  component: FeedCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeedCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeedCard> = (args) => (
  <FeedCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeedCardProps.base,
} as IFeedCard;
