/* eslint-disable arrow-body-style */
import { ChangeEvent, memo, useState, VFC } from 'react';
import { Button, Checkbox, Input, Textarea } from '@chakra-ui/react';
import {
  Box,
  Divider,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/layout';

export const Contact: VFC = memo(() => {
  const [contactTitle, setContactTitle] = useState('');
  const [isChecked, setisChecked] = useState(false);

  const onChangeContactTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setContactTitle(e.target.value);

  return (
    <Flex bg="gray.200" align="center" justify="center" height="70vh">
      <Box bg="white" w={'md'} h={'lg'} p={2} borderRadius="md" shadow="md">
        <VStack
          paddingTop="3"
          fontSize="23px"
          fontWeight="bold"
          color="brand"
          spacing="12px"
        >
          <Text>お問い合わせ</Text>
        </VStack>
        <Divider borderColor="brand" my={4} />
        <Stack spacing={4} py={4} px={10}>
          <Text h="2">件名（必須）</Text>
          <Input
            borderColor="gray.300"
            placeholder="件名を入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
            value={contactTitle}
            onChange={onChangeContactTitle}
          />
          <Text h="2">お問い合わせ内容（必須）</Text>
          <Textarea
            h={'28'}
            borderColor="gray.300"
            placeholder="お問い合わせ内容を入力してください"
            _placeholder={{ color: 'gray.300' }}
            _hover={{ color: 'gray.600' }}
          />
          <Divider borderColor="brand" my={4} />
          <VStack spacing={2} align="center">
            <Button color="brand" variant="link">
              プライバシーポリシー
            </Button>
            <Checkbox
              size="sm"
              alignContent={'center'}
              defaultIsChecked={false}
              borderColor="gray.300"
              onChange={(e) => {
                isChecked ? setisChecked(false) : setisChecked(true);
              }}
            >
              プライバシーポリシーに同意する
            </Checkbox>
          </VStack>
          <Spacer />
          <Button bg="brand" color="white" _hover={{ opacity: 0.8 }}>
            送信する
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});
