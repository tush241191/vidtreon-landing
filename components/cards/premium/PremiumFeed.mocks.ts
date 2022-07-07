import { IPremiumFeed } from './PremiumFeed';

const base: IPremiumFeed = {
  onClickSubscribe: function (): void {
    throw new Error('Function not implemented.');
  },
};

export const mockPremiumFeedProps = {
  base,
};
