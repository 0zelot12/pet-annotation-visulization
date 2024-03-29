import { Box, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <Box padding="2rem">
      <Heading mb={4}>PET Visualizer</Heading>
      <Text fontSize="xl">Content coming soon...</Text>
      <HStack mt="24px" spacing={2}>
        <Link to="/annotation">
          <Button size="lg" colorScheme="teal">
            Annotation
          </Button>
        </Link>
        <Link to="/visualization">
          <Button size="lg" colorScheme="teal">
            Visualization
          </Button>
        </Link>
        <Link to="/document-explorer">
          <Button size="lg" colorScheme="teal">
            Document Explorer
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}
