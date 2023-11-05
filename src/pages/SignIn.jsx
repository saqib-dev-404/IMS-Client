import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    event.target.reset();
  };

  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} minH="100vh">
      <GridItem bg="#F3EFEF">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Image src={logo} alt="Logo" objectFit="contain" w="50%" mb={4} />
          <Text
            as="h1"
            color="primary.base"
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
          >
            Police Training Institute
          </Text>
          <Stack direction="row" spacing={3} mt={5}>
            <Link to="/student">
              <Button bg="primary.base" color="white">
                student
              </Button>
            </Link>
            <Link to="/teacher">
              <Button bg="primary.base" color="white">
                Teacher
              </Button>
            </Link>
            <Link to="/admin">
              <Button bg="primary.base" color="white">
                Admin
              </Button>
            </Link>
            <Link to="/inventory_admin">
              <Button bg="primary.base" color="white">
                Inventory Admin
              </Button>
            </Link>
          </Stack>
        </Flex>
      </GridItem>
      <GridItem
        bg={{ base: "gray.50", md: "white" }}
        p={8}
        boxShadow={{ base: "none", md: "xl" }}
        w="100%"
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <LockIcon mb={3} w={10} h={10} color="primary.base" />
          <Text as="h1" fontSize="2xl" fontWeight="bold" mb={9}>
            Welcome to SignIn Page
          </Text>
          <Box as="form" onSubmit={handleSubmit} width="100%">
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="eg: abc@gmail.com"
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  placeholder="*********"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  minLength={8}
                />
              </FormControl>
              <Button
                type="submit"
                bg={"primary.base"}
                color={"white.base"}
                size="lg"
                mt={4}
              >
                Sign In
              </Button>
            </Stack>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Grid,
//   GridItem,
//   Image,
//   Input,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { LockIcon } from "@chakra-ui/icons";
// import logo from "../assets/logo.png";
// import { Link, Navigate } from "react-router-dom";

// export default function SignIn() {
//   const [selectedRole, setSelectedRole] = useState("student");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       role: selectedRole,
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//     event.target.reset();
//   };

//   const renderInterface = () => {
//     switch (selectedRole) {
//       case "student":
//         return "Student Login";
//       case "teacher":
//         return "Teacher Login";
//       case "admin":
//         return "Admin Login";
//       case "inventory_admin":
//         return "Inventory Admin Login";
//       default:
//         return null;
//     }
//   };

//   return (
//     <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} minH="100vh">
//       <GridItem bg="#F3EFEF">
//         <Flex
//           direction="column"
//           alignItems="center"
//           justifyContent="center"
//           h="100%"
//         >
//           <Image src={logo} alt="Logo" objectFit="contain" w="50%" mb={4} />
//           <Text
//             as="h1"
//             color="primary.base"
//             fontSize="2xl"
//             fontWeight="bold"
//             textAlign="center"
//           >
//             Police Training Institute
//           </Text>
//           <Stack direction="row" spacing={3} mt={5}>
//             <Button
//               bg={selectedRole === "student" ? "primary.base" : "gray.300"}
//               color={selectedRole === "student" ? "white" : "black"}
//               onClick={() => setSelectedRole("student")}
//             >
//               Student
//             </Button>
//             <Button
//               bg={selectedRole === "teacher" ? "primary.base" : "gray.300"}
//               color={selectedRole === "teacher" ? "white" : "black"}
//               onClick={() => setSelectedRole("teacher")}
//             >
//               Teacher
//             </Button>
//             <Button
//               bg={selectedRole === "admin" ? "primary.base" : "gray.300"}
//               color={selectedRole === "admin" ? "white" : "black"}
//               onClick={() => setSelectedRole("admin")}
//             >
//               Admin
//             </Button>
//             <Button
//               bg={
//                 selectedRole === "inventory_admin" ? "primary.base" : "gray.300"
//               }
//               color={selectedRole === "inventory_admin" ? "white" : "black"}
//               onClick={() => setSelectedRole("inventory_admin")}
//             >
//               Inventory Admin
//             </Button>
//           </Stack>
//         </Flex>
//       </GridItem>
//       <GridItem
//         bg={{ base: "gray.50", md: "white" }}
//         p={8}
//         boxShadow={{ base: "none", md: "xl" }}
//         w="100%"
//       >
//         <Flex
//           direction="column"
//           alignItems="center"
//           justifyContent="center"
//           height="100%"
//         >
//           <LockIcon mb={3} w={10} h={10} color="primary.base" />
//           <Text
//             as="h2"
//             color="primary.base"
//             fontSize="2xl"
//             fontWeight="bold"
//             textAlign="center"
//           >
//             {renderInterface()}
//           </Text>
//           <Box as="form" onSubmit={handleSubmit} width="100%">
//             <Stack spacing={4}>
//               <FormControl isRequired>
//                 <FormLabel htmlFor="email">Email Address</FormLabel>
//                 <Input
//                   type="email"
//                   placeholder="eg: abc@gmail.com"
//                   id="email"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </FormControl>
//               <FormControl isRequired>
//                 <FormLabel htmlFor="password">Password</FormLabel>
//                 <Input
//                   type="password"
//                   placeholder="*********"
//                   id="password"
//                   name="password"
//                   autoComplete="current-password"
//                   minLength={8}
//                 />
//               </FormControl>
//               <Button
//                 type="submit"
//                 bg={"primary.base"}
//                 color={"white.base"}
//                 size="lg"
//                 mt={4}
//                 _hover={{
//                   bg: "primary.hover",
//                   color: "white.base",
//                 }}
//               >
//                 Sign In
//               </Button>
//             </Stack>
//           </Box>
//         </Flex>
//       </GridItem>
//     </Grid>
//   );
// }
