/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import { ChangeEvent, memo, useEffect, useState, VFC } from 'react';
import {
  Input,
  Box,
  Flex,
  Checkbox,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { Badge, Divider, Spacer, Stack, Text, VStack } from '@chakra-ui/layout';

import { SignUpParams } from 'types/api/sign';
import { useNewUserRegistration } from 'hooks/useNewUserRegistration';
import { PrimaryButton } from 'components/atoms/button/PrimaryButton';
import { useHistory } from 'react-router-dom';

const NAME_MAX_LENGTH = 30;

export const NewUserRegistration: VFC = memo(() => {
  const { newUserRegistration, newUserRegistrationLoading } =
    useNewUserRegistration();
  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [userKana, setUserKana] = useState('');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
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
  const onClickPolicy = () => history.push('/policy');
  const onClickTermsOfUse = () => history.push('/terms_of_use');

  const isNameError = userName.length > NAME_MAX_LENGTH;

  const regExpKana = /^[???-?????????]+$/;
  const isKanaError = !regExpKana.test(userKana) && userKana !== '';

  const regExpEmail =
    /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  const isEmailError = !regExpEmail.test(userId) && userId !== '';

  const isPasswordNumberError =
    userPassword !== '' &&
    (userPassword.length < 6 || 24 < userPassword.length);

  const regExpPassword = /^[a-zA-Z0-9.?/-]+$/;
  const isPasswordCharacterError =
    !regExpPassword.test(userPassword) && userPassword !== '';

  const isPasswordConfirmationError =
    userPasswordConfirmation !== '' &&
    userPassword !== userPasswordConfirmation;

  const regExpPhone = /[0-9]{10,11}/;
  const isPhoneNumberError =
    !regExpPhone.test(userPhoneNumber) && userPhoneNumber !== '';

  return (
    <Flex bg="gray.200" align="center" justify="center">
      <Box m={10} bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <VStack
          fontSize={{ base: '20px', md: '23px' }}
          fontWeight="bold"
          color="brand"
          spacing="12px"
        >
          <Text>????????????????????????????????????</Text>
          <Text>????????????????????????</Text>
        </VStack>
        <Divider borderColor="brand" my={4} />
        <Stack spacing={4}>
          <FormControl isInvalid={isNameError}>
            <FormLabel>
              ??????
              <Badge colorScheme="red" variant="outline" ml="2">
                30??????
              </Badge>
            </FormLabel>
            <Input
              borderColor="gray.300"
              placeholder="?????????????????????????????????"
              _placeholder={{ color: 'gray.300' }}
              _hover={{ color: 'gray.600' }}
              value={userName}
              onChange={onChangeName}
            />
            {isNameError && (
              <FormErrorMessage>30???????????????????????????</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isKanaError}>
            <FormLabel>
              ????????????
              <Badge colorScheme="red" variant="outline" ml="2">
                ??????????????????
              </Badge>
            </FormLabel>
            <Input
              borderColor="gray.300"
              placeholder="???????????????????????????????????????"
              _placeholder={{ color: 'gray.300' }}
              _hover={{ color: 'gray.600' }}
              value={userKana}
              onChange={onChangeKana}
            />
            {isKanaError && (
              <FormErrorMessage>
                ??????????????????????????????????????????????????????
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isEmailError}>
            <FormLabel>
              E?????????????????????
              <Badge colorScheme="red" variant="outline" ml="2">
                ???????????????
              </Badge>
            </FormLabel>
            <Input
              borderColor="gray.300"
              placeholder="E????????????????????????????????????"
              _placeholder={{ color: 'gray.300' }}
              _hover={{ color: 'gray.600' }}
              value={userId}
              onChange={onChangeId}
            />
            {isEmailError && (
              <FormErrorMessage>E????????????????????????????????????</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isInvalid={isPasswordNumberError || isPasswordCharacterError}
          >
            <FormLabel>
              ???????????????
              <Badge colorScheme="red" variant="outline" ml="1">
                6~24??????
              </Badge>
            </FormLabel>
            <Input
              borderColor="gray.300"
              placeholder="??????????????????????????????????????????"
              _placeholder={{ color: 'gray.300' }}
              _hover={{ color: 'gray.600' }}
              type="password"
              value={userPassword}
              onChange={onChangePassword}
            />
            {isPasswordNumberError && (
              <FormErrorMessage>????????????????????????</FormErrorMessage>
            )}
            {isPasswordCharacterError && (
              <FormErrorMessage>
                ????????????????????????????????????????????????
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isPasswordConfirmationError}>
            <FormLabel>????????????????????????</FormLabel>
            <Input
              borderColor="gray.300"
              placeholder="??????????????????????????????????????????"
              _placeholder={{ color: 'gray.300' }}
              _hover={{ color: 'gray.600' }}
              type="password"
              value={userPasswordConfirmation}
              onChange={onChangePasswordConfirmation}
            />
            {isPasswordConfirmationError && (
              <FormErrorMessage>??????????????????????????????????????????</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isPhoneNumberError}>
            <FormLabel>
              ????????????
              <Badge colorScheme="red" variant="outline" ml="2">
                ????????????
              </Badge>
            </FormLabel>
            <Input
              borderColor="gray.300"
              placeholder="???????????????????????????????????????"
              _placeholder={{ color: 'gray.300' }}
              _hover={{ color: 'gray.600' }}
              value={userPhoneNumber}
              onChange={onChangePhoneNumber}
            />
            {isPhoneNumberError && (
              <FormErrorMessage>???????????????????????????</FormErrorMessage>
            )}
          </FormControl>
          <Divider borderColor="brand" my={4} />
          <VStack spacing={2} align="center">
            <Button color="brand" variant="link" onClick={onClickPolicy}>
              ??????????????????????????????
            </Button>
            <Button color="brand" variant="link" onClick={onClickTermsOfUse}>
              ????????????
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
            ????????????????????????????????????????????????????????????
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
              !isChecked ||
              isNameError ||
              isKanaError ||
              isEmailError ||
              isPasswordNumberError ||
              isPasswordCharacterError ||
              isPasswordConfirmationError ||
              isPhoneNumberError
            }
            loading={newUserRegistrationLoading}
            onClick={onClickNewRegistration}
          >
            ??????????????????
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
