/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
import { memo, VFC } from 'react';
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
import { CartModal } from '../cart/CartModal';
import { useMessage } from 'hooks/useMessage';

export const Header: VFC = memo(() => {
  const {
    isOpen: isOpenMenuDrawer,
    onOpen: onOpenMenuDrawer,
    onClose: onCloseMenuDrawer,
  } = useDisclosure();

  // For CartModal
  const {
    isOpen: isOpenCartModal,
    onOpen: onOpenCartModal,
    onClose: onCloseCartModal,
  } = useDisclosure();

  const history = useHistory();
  const { loginUser } = useLoginUser();
  const { logout } = useAuth();
  const { showMessage } = useMessage();

  const onHome = () => history.push('/');
  const onContact = () => history.push('/contact');
  const onHowToUseBenteku = () => history.push('/how_to_use_benteku');
  const onMyPage = () => history.push('/my_page');
  const onLogin = () => history.push('/login');
  const onLogout = () => logout();

  const onCartModal = () => {
    if (loginUser) {
      onOpenCartModal();
    } else {
      history.push('/login');
      showMessage({
        title: 'ログインしてください',
        status: 'error',
      });
    }
  };

  return (
    <>
      <HStack
        bg="white"
        w="100%"
        h="80px"
        paddingRight={4}
        spacing={4}
        color="brand"
        fontWeight={'bold'}
        align="center"
        top={0}
        position="sticky"
        zIndex={'sticky'}
      >
        <MenuIconButton onOpen={onOpenMenuDrawer} />
        <Image
          boxSize="60px"
          src={MainLogo}
          alt="MainLogo"
          display={{ base: 'none', md: 'flex' }}
          _hover={{ opacity: '0.8', cursor: 'pointer' }}
          onClick={onHome}
        />
        <Link
          paddingLeft={2}
          display={{ base: 'none', md: 'flex' }}
          onClick={onHowToUseBenteku}
        >
          弁テクの使い方
        </Link>
        <Link display={{ base: 'none', md: 'flex' }} onClick={onContact}>
          お問い合わせ
        </Link>
        {loginUser ? (
          <Link display={{ base: 'none', md: 'flex' }} onClick={onLogout}>
            ログアウト
          </Link>
        ) : (
          <Link display={{ base: 'none', md: 'flex' }} onClick={onLogin}>
            ログイン
          </Link>
        )}
        {!loginUser && (
          <Link display={{ base: 'none', md: 'flex' }} onClick={onLogin}>
            ゲストログイン
          </Link>
        )}
        <Spacer />
        {loginUser && (
          <Text
            _hover={{ opacity: '0.8', cursor: 'pointer' }}
            fontWeight={'bold'}
            onClick={onMyPage}
          >
            {loginUser.name + `さん`}
          </Text>
        )}
        <Image
          boxSize="40px"
          src={CartIcon}
          alt="CartIcon"
          _hover={{ opacity: '0.8', cursor: 'pointer' }}
          onClick={onCartModal}
        />
      </HStack>
      <MenuDrawer
        onClose={onCloseMenuDrawer}
        isOpen={isOpenMenuDrawer}
        onHome={onHome}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      {isOpenCartModal && (
        <CartModal isOpen={isOpenCartModal} onClose={onCloseCartModal} />
      )}
    </>
  );
});
