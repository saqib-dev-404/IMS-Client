import React from 'react';
import { Box, Grid, GridItem, Heading, Container } from '@chakra-ui/react';
import ProfileCard from '../../components/pages/Admin/ProfileCard';

export default function TeacherProfileView({teachers}) {
  return (
    <Container maxW="container.xl" mt="4">
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
        {teachers.map((teacher, index) => (
          <ProfileCard
            key={index}
            imgUrl={teacher.imgUrl}
            name={`${teacher.firstname.charAt(0).toUpperCase()}${teacher.firstname.slice(1)} ${teacher.lastname.charAt(0).toUpperCase()}${teacher.lastname.slice(1)}`}
            designation={teacher.designation}
            phoneNumber={teacher.contactNo}
            beltNo={teacher.beltNo}
          />
        ))}
    </Grid>
  </Container>


);

}
