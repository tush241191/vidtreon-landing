import { IPremiumFeed } from './PremiumFeed';

const base: IPremiumFeed = {
  label: 'Premium feed card!',
  onClickSubscribe: function (): void {
    throw new Error('Function not implemented.');
  },
};

export const mockPremiumFeedProps = {
  base,
};
