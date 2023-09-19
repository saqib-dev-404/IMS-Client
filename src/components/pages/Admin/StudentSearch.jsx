import React from 'react';
import {
  Box,
  InputGroup,
  Input,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';

export default function StudentSearch() {
  return (
    <Box
      backgroundColor="white"
      borderWidth="1px"
      borderRadius="lg"
      padding={3}
      width="100%"
      
    >
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 12, md: 2 }}>
          <InputGroup>
            <Input type="text" placeholder="Belt No." />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <InputGroup>
            <Input type="text" placeholder="Name" />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <InputGroup>
            <Input type="text" placeholder="Course name" />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 2 }}>
          <Button width="100%" colorScheme="blue" size="md">
            Search
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}
