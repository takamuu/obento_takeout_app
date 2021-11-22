import { Image } from '@chakra-ui/image';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { memo, VFC } from 'react';

type Props = {
  imageUrl: string;
  restaurantName: string;
};

export const RestaurantCard: VFC<Props> = memo((props) => {
  const { imageUrl, restaurantName } = props;
  return (
    <Box
      w="260px"
      h="320px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="5px"
          w="220px"
          h="250px"
          src={imageUrl}
          alt="HappyHour"
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {restaurantName}
        </Text>
      </Stack>
    </Box>
  );
});