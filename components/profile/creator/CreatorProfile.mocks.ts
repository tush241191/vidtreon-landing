import { ICreatorProfile } from './CreatorProfile';

const base: ICreatorProfile = {
  logout: function (): void {
    throw new Error('Function not implemented.');
  },
};

export const mockCreatorProfileProps = {
  base,
};
