/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
import { memo, useCallback, VFC } from 'react';
import { HStack, Link, Spacer, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useDisclosure } from '@chakra-ui/hooks';
import { useHistory } from 'react-router-dom';

import { useLoginUser } from 'hooks/useLoginUser';
import { useAuth } from 'hooks/useAuth';
import { MenuIconButton } from 'components/atoms/button/MenuIconButton';
import { MenuDrawer } from 'components/molecules/MenuDrawer';
import MainLogo from 'images/MainLogo.svg';
import CartIcon from 'images/CartIcon.svg';

export const Header: VFC = memo(() => {
  const {
    isOpen: isOpenMenuDrawer,
    onOpen: onOpenMenuDrawer,
    onClose: onCloseMenuDrawer,
  } = useDisclosure();

  // todo: cartModal実装時に使用
  // const {
  //   isOpen: isOpenCartModal,
  //   onOpen: onOpenCartModal,
  //   onClose: onCloseCartModal,
  // } = useDisclosure();

  const { loginUser } = useLoginUser();
  const { logout } = useAuth();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push('/restaurants'), []);
  const onClickLogin = useCallback(() => history.push('/login'), []);
  const onClickCart = useCallback(() => history.push('/restaurants/cart'), []);

  const onClickLogout = () => logout();

  return (
    <>
      <HStack
        w="100%"
        h="80px"
        paddingRight={4}
        spacing={4}
        color="brand"
        fontWeight={'bold'}
        align="center"
        position="fixed"
      >
        <MenuIconButton onOpen={onOpenMenuDrawer} />
        <Image
          boxSize="60px"
          src={MainLogo}
          alt="MainLogo"
          display={{ base: 'none', md: 'flex' }}
          _hover={{ opacity: '0.8', cursor: 'pointer' }}
          onClick={onClickHome}
        />
        <Link paddingLeft={2} display={{ base: 'none', md: 'flex' }}>
          弁テクの使い方
        </Link>
        <Link display={{ base: 'none', md: 'flex' }}>お問い合わせ</Link>
        {loginUser ? (
          <Link display={{ base: 'none', md: 'flex' }} onClick={onClickLogout}>
            ログアウト
          </Link>
        ) : (
          <Link display={{ base: 'none', md: 'flex' }} onClick={onClickLogin}>
            ログイン
          </Link>
        )}
        <Link display={{ base: 'none', md: 'flex' }} onClick={onClickLogin}>
          ゲストログイン
        </Link>
        <Spacer />
        {loginUser && (
          <Text
            _hover={{ opacity: '0.8', cursor: 'pointer' }}
            fontWeight={'bold'}
          >
            {loginUser.name + `さん`}
          </Text>
        )}
        <Image
          boxSize="40px"
          src={CartIcon}
          alt="CartIcon"
          _hover={{ opacity: '0.8', cursor: 'pointer' }}
          onClick={onClickCart}
        />
      </HStack>
      <MenuDrawer
        onClose={onCloseMenuDrawer}
        isOpen={isOpenMenuDrawer}
        onClickHome={onClickHome}
        onClickLogin={onClickLogin}
      />
      {/* <CartModal
        onCloseCartModal={onCloseCartModal}
        isOpenCartModal={isOpenCartModal}
        onOpen={onOpenCartModal}
      /> */}
    </>
  );
});
