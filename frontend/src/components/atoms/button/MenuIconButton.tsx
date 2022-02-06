import { memo, VFC } from 'react';
import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      paddingLeft={8}
      size={'lg'}
      variant="unstyled"
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  );
});
