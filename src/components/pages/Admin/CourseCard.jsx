import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FaCalendar, FaUser, FaUsers } from "react-icons/fa";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import AlertDeleteDialog from "./AlertDeleteDialog";
import EditCourseModal from "./EditCourseModal";

export default function CourseCard({
  imageUrl,
  name,
  description,
  department,
  strength,
  duration,
  author,
  category,
  courseCode,
}) {
  const [deleteCourse, setDeleteCourse] = useState(null);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openDeleteConfirmation = (course) => {
    setDeleteCourse(course);
    setIsDeleteConfirmationOpen(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setDeleteCourse(null);
    setIsDeleteConfirmationOpen(false);
  };

  const handleConfirmDeleteCourse = (deleteCourse) => {
    if (deleteCourse) {
      // Implement your delete logic here
      console.log(`Deleting course with ID: ${deleteCourse}`);
      // Close the confirmation dialog
      handleCloseDeleteConfirmation();
    }
  };

  // Function to open the edit modal
  const openEditModal = (course) => {
    setSelectedCourse(course);
    setIsEditModalOpen(true);
  };

  // Function to close the edit modal
  const closeEditModal = () => {
    setSelectedCourse(null);
    setIsEditModalOpen(false);
  };

  // Function to handle editing the course
  const handleEditCourse = (editedCourse) => {
    // Implement your logic to update the course with the editedCourse data
    console.log("Edited course data:", editedCourse);
    // Close the edit modal
    closeEditModal();
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      backgroundColor="white"
      key={courseCode}
    >
      <Box p="4">
        <Heading as="h4" size="md">
          <Link to={`/teacher/course-details/${courseCode}`}>{name}</Link>
        </Heading>
        <Text color="gray.600" mt="2">
          {description}
        </Text>
        <Table size="sm" mt="3">
          <Tbody>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaCalendar color={"blue"} />
                  <Text fontWeight="semibold">Duration</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{duration}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack pt={2} spacing={1} direction="row" alignItems="center">
                  <FaUser color={"red"} />
                  <Text fontWeight="semibold">Author</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{author}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaUsers color={"green"} />
                  <Text fontWeight="semibold">Category</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{category}</Td>
            </Tr>
          </Tbody>
        </Table>
        <Stack>
          <Button
            as={Link}
            to={""}
            colorScheme="blue"
            _hover={{ backgroundColor: "blue.300", color: "white" }}
            color={"white"}
            leftIcon={<EditIcon />}
            onClick={() =>
              openEditModal({
                courseCode,
                name,
                description,
                department,
                strength,
                duration,
                author,
                category,
              })
            }
          >
            Edit
          </Button>
          <Button
            colorScheme="red"
            leftIcon={<DeleteIcon />}
            onClick={() => openDeleteConfirmation(courseCode)}
          >
            Delete
          </Button>
          <AlertDeleteDialog
            isOpen={isDeleteConfirmationOpen}
            onClose={handleCloseDeleteConfirmation}
            type={"course"}
            onConfirm={handleConfirmDeleteCourse}
          />
          <EditCourseModal
            isOpen={isEditModalOpen}
            onClose={closeEditModal}
            course={selectedCourse}
            onEdit={handleEditCourse}
          />
        </Stack>
      </Box>
    </Box>
  );
}
