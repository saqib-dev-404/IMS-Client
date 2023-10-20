// src/components/InventoryDashboard.js
import { Box, Flex, Text, Center, Heading } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import ProductTable from "../../components/pages/Inventory_Admin/ProductTable";

const InventoryDashboard = () => {
  // Sample data for the chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales in a Month",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Inventory Dashboard
      </Heading>
      <Flex justify="space-between" flexWrap="wrap">
        <Box flex="1" p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Sales in a Month
          </Text>
          <Center>
            <Bar data={chartData} options={{ maintainAspectRatio: false }} />
          </Center>
        </Box>
        <Box flex="1" p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Total Products
          </Text>
          <Text fontSize="2xl">1000</Text>
        </Box>
        <Box flex="1" p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Total Categories
          </Text>
          <Text fontSize="2xl">50</Text>
        </Box>
      </Flex>
      <Box p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
        <Text fontSize="lg" fontWeight="bold">
          Latest Products Added
        </Text>
        <ProductTable />
      </Box>
    </Box>
  );
};

export default InventoryDashboard;
