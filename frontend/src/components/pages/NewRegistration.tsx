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
import { useNewUserRegistration } from 'hooks/useNewUserRegistration';

export const NewRegistration: VFC = memo(() => {
  const { newUserRegistration, loading } = useNewUserRegistration();

  const history = useHistory();

  const onClickHome = useCallback(
    () => history.push('/restaurants'),
    [history]
  );

  const [userName, setUserName] = useState('山田　太郎');
  const [userKana, setUserKana] = useState('ヤマダ　タロウ');
  const [userId, setUserId] = useState('taro-yamada@example.com');
  const [userPassword, setUserPassword] = useState('password');
  const [userPasswordConfirmation, setUserPasswordConfirmation] =
    useState('password');
  const [userPhoneNumber, setUserPhoneNumber] = useState('00033335555');
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

  const onClickNewRegistration = () => newUserRegistration(params);

  return (
    <Flex align="center" justify="center" height="105vh">
      <Box bg="white" p={2} borderRadius="md" shadow="md">
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
            placeholder="名前を入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            value={userName}
            onChange={onChangeName}
          />
          <Text h="2">フリガナ</Text>
          <Input
            borderColor="gray.300"
            placeholder="フリガナを入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            value={userKana}
            onChange={onChangeKana}
          />
          <Text h="2">Eメールアドレス</Text>
          <Input
            borderColor="gray.300"
            placeholder="Eメールを入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            value={userId}
            onChange={onChangeId}
          />
          <Text h="2">パスワード</Text>
          <Input
            borderColor="gray.300"
            placeholder="パスワードを入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            type="password"
            value={userPassword}
            onChange={onChangePassword}
          />
          <Text h="2">確認用パスワード</Text>
          <Input
            borderColor="gray.300"
            placeholder="パスワードを入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            type="password"
            value={userPasswordConfirmation}
            onChange={onChangePasswordConfirmation}
          />
          <Text h="2">電話番号（数字のみ入力）</Text>
          <Input
            borderColor="gray.300"
            placeholder="電話番号を入力してください"
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
            size="sm"
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