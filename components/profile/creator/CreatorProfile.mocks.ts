import { ICreatorProfile } from './CreatorProfile';

const base: ICreatorProfile = {
  label: 'Creator profile card!',
  onClickSubscribe: function (): void {
    throw new Error('Function not implemented.');
  },
};

export const mockCreatorProfileProps = {
  base,
};
