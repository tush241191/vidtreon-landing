import { ICreatorProfile } from './CreatorProfile';

const base: ICreatorProfile = {
  onClickSubscribe: function (): void {
    throw new Error('Function not implemented.');
  },
};

export const mockCreatorProfileProps = {
  base,
};
