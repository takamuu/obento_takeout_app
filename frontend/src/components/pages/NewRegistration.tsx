/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import { ChangeEvent, memo, useCallback, useState, VFC } from 'react';
import {
  Image,
  Input,
  Box,
  Divider,
  Flex,
  Stack,
  HStack,
  VStack,
  Text,
  Checkbox,
  Spacer,
  Button,
} from '@chakra-ui/react';

import MainLogo from 'images/MainLogo.svg';
import { PrimaryButton } from 'components/atoms/button/PrimaryButton';
import { useHistory } from 'react-router-dom';
import { SignUpParams } from 'types/api/sign';
import { useNewRegistration } from 'hooks/useNewRegistration';

export const NewRegistration: VFC = memo(() => {
  const { newRegistration, loading } = useNewRegistration();

  const history = useHistory();

  const onClickHome = useCallback(
    () => history.push('/restaurants'),
    [history]
  );

  // ユーザーID用State
  const [userName, setUserName] = useState('山田　太郎');
  const [userKana, setUserKana] = useState('ヤマダ　タロウ');
  const [userId, setUserId] = useState('taro-yamada@example.com');
  const [userPassword, setUserPassword] = useState('password');
  const [userPasswordConfirmation, setUserPasswordConfirmation] =
    useState('password');
  const [userPhoneNumber, setUserPhoneNumber] = useState('000-0000-1111');
  const [isChecked, setisChecked] = useState(false);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  const onChangeKana = (e: ChangeEvent<HTMLInputElement>) =>
    setUserKana(e.target.value);

  const onChangeId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setUserPassword(e.target.value);

  const onChangePasswordConfirmation = (e: ChangeEvent<HTMLInputElement>) =>
    setUserPasswordConfirmation(e.target.value);

  const onChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) =>
    setUserPhoneNumber(e.target.value);

  const params: SignUpParams = {
    name: userName,
    kana: userKana,
    email: userId,
    password: userPassword,
    password_confirmation: userPasswordConfirmation,
    phone_number: userPhoneNumber,
  };

  const onClickNewRegistration = () => newRegistration(params);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={2} borderRadius="md" shadow="md">
        <HStack spacing="12px">
          <Image
            boxSize="60px"
            src={MainLogo}
            alt="MainLogo"
            _hover={{ cursor: 'pointer' }}
            onClick={onClickHome}
          />
          <Text fontSize="23px" fontWeight="bold" color="brand">
            お弁当テイクアウトアプリ
          </Text>
        </HStack>
        <Divider borderColor="brand" my={4} />
        <Text
          textAlign={'center'}
          fontSize="23px"
          fontWeight="bold"
          color="brand"
        >
          アカウントを作成
        </Text>
        <Stack spacing={4} py={4} px={10}>
          <Text h="2">名前</Text>
          <Input
            borderColor="gray.300"
            placeholder="入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            value={userName}
            onChange={onChangeName}
          />
          <Text h="2">カナ</Text>
          <Input
            borderColor="gray.300"
            placeholder="入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            value={userKana}
            onChange={onChangeKana}
          />
          <Text h="2">E-mail</Text>
          <Input
            borderColor="gray.300"
            placeholder="入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            value={userId}
            onChange={onChangeId}
          />
          <Text h="2">パスワード</Text>
          <Input
            borderColor="gray.300"
            placeholder="６文字以上入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            value={userPassword}
            onChange={onChangePassword}
          />
          <Text h="2">もう一度パスワードを入力して下さい</Text>
          <Input
            borderColor="gray.300"
            placeholder="６文字以上入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            value={userPasswordConfirmation}
            onChange={onChangePasswordConfirmation}
          />
          <Text h="2">TEL</Text>
          <Input
            borderColor="gray.300"
            placeholder="TEL"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            value={userPhoneNumber}
            onChange={onChangePhoneNumber}
          />
          {/* <Spacer /> */}
          <Divider borderColor="brand" my={4} />
          <VStack spacing={2} align="center">
            <Button color="brand" variant="link">
              利用規約
            </Button>
            <Button color="brand" variant="link">
              プライバシーポリシー
            </Button>
          </VStack>
          <Checkbox
            defaultIsChecked={false}
            borderColor="gray.300"
            onChange={(e) => {
              isChecked ? setisChecked(false) : setisChecked(true);
            }}
          >
            利用規約とプライバシーポリシーに同意する
          </Checkbox>
          <Spacer />
          <PrimaryButton
            disabled={
              !userName ||
              !userKana ||
              !userId ||
              !userPassword ||
              !userPasswordConfirmation ||
              !userPhoneNumber ||
              !isChecked
            }
            loading={loading}
            onClick={onClickNewRegistration}
          >
            同意して登録
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
