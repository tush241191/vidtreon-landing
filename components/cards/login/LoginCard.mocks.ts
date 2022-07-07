import { ILoginCard } from './LoginCard';

const base: ILoginCard = {
  toggleLoginModal: function (): void {
    throw new Error('Function not implemented.');
  },
};

export const mockLoginCardProps = {
  base,
};
