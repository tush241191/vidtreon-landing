import { IFeedCard } from './FeedCard';

const base: IFeedCard = {
  data: {
    id: 1,
    title: 'What is Lorem Ipsum?',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content_type: {
      type: 'text',
      color: 'bg-blue-700',
    },
    ago: 'about 11 hours ago',
    assets: '',
    paid: false,
  },
};

export const mockFeedCardProps = {
  base,
};
