import { memo, ReactNode, VFC } from 'react';
import { Button } from '@chakra-ui/button';

type Props = {
  children: ReactNode;
};

export const GuestButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Button bg="teal.300" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  );
});