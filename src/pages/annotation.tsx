import { AddIcon, ArrowLeftIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Divider,
  VStack,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
  CardFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const availableModels = [
  "gpt-3.5-turbo-0125",
  "gpt-4-0613",
  "gpt-4-1106-preview",
];
const availableDocs = [
  "doc-1.1",
  "doc-1.2",
  "doc-1.3",
  "doc-2.1",
  "doc-2.2",
  "doc-2.3",
  "doc-2.4",
];

export default function Annotation() {
  const [model, setModel] = useState<string>("gpt-3.5-turbo-0125");
  const [temperature, setTemperature] = useState<number>(0.7);
  return (
    <Box padding="2rem">
      <Heading mb={4}>Annotation</Heading>
      <Text fontSize="xl">Configure a prompt and send it to ChatGPT.</Text>
      <Link to="/">
        <Button
          size="lg"
          colorScheme="teal"
          mt="24px"
          mr={2}
          leftIcon={<ArrowLeftIcon />}
        >
          Back
        </Button>
      </Link>
      <Card mt={4}>
        <CardHeader>
          <Heading size="md">Annotation parameters</Heading>
        </CardHeader>
        <CardBody>
          <VStack align="start" divider={<Divider />} spacing={8}>
            <Box>
              <FormControl variant="">
                <FormLabel>Model</FormLabel>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {model}
                  </MenuButton>
                  <MenuList>
                    {availableModels.map((model) => (
                      <MenuItem onClick={() => setModel(model)}>
                        {model}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </FormControl>
            </Box>
            <Box>
              <Text>Documents to be annotated</Text>
              <Box my={2}>
                <Button colorScheme="teal" size="sm" variant="ghost" mr={2}>
                  Select all
                </Button>
                <Button colorScheme="teal" size="sm" variant="ghost">
                  Reset selection
                </Button>
              </Box>
              <HStack>
                {availableDocs.map((doc) => (
                  <Tag colorScheme="teal" size="lg">
                    <TagLeftIcon boxSize="12px" as={AddIcon} />
                    <TagLabel>{doc}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            </Box>
            <Box>
              <Text>Documents to use as context</Text>
              <Box my={2}>
                <Button colorScheme="teal" size="sm" variant="ghost" mr={2}>
                  Select all
                </Button>
                <Button colorScheme="teal" size="sm" variant="ghost">
                  Reset selection
                </Button>
              </Box>
              <HStack>
                {availableDocs.map((doc) => (
                  <Tag colorScheme="teal" size="lg">
                    <TagLeftIcon boxSize="12px" as={AddIcon} />
                    <TagLabel>{doc}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Temperature</FormLabel>
                <NumberInput
                  value={temperature}
                  onChange={(value) => setTemperature(parseFloat(value))}
                  min={0}
                  max={2}
                  precision={2}
                  step={0.1}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Box>
          </VStack>
        </CardBody>
        <CardFooter>
          <Button size="lg" colorScheme="teal" mr={2}>
            Annotate
          </Button>
          <Button size="lg" colorScheme="red">
            Reset
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
}
