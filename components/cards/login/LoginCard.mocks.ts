import { ILoginCard } from './LoginCard';

const base: ILoginCard = {
  label: 'Login card!',
  toggleLoginModal: function (): void {
    throw new Error('Function not implemented.');
  },
};

export const mockLoginCardProps = {
  base,
};
