import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <Box padding="2rem">
      <Heading mb={4}>PET Visualizer</Heading>
      <Text fontSize="xl">Content coming soon...</Text>
      <Link to="/annotation">
        <Button size="lg" colorScheme="green" mt="24px" mr={2}>
          Annotation
        </Button>
      </Link>
      <Link to="/visualization">
        <Button size="lg" colorScheme="green" mt="24px">
          Visualization
        </Button>
      </Link>
    </Box>
  );
}
