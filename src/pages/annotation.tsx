import { ArrowLeftIcon, ChevronDownIcon } from "@chakra-ui/icons";
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DocumentTable from "../components/document-table";

export interface Document {
  name: string;
  length: number;
}

export interface DocumentGroup {
  number: number;
  documents: Document[];
}

const availableModels = [
  "gpt-3.5-turbo-0125",
  "gpt-4-0613",
  "gpt-4-1106-preview",
];

const availableDocs: DocumentGroup[] = [
  {
    number: 1,
    documents: [
      { name: "doc-1.1", length: 42 },
      { name: "doc-1.2", length: 42 },
      { name: "doc-1.3", length: 42 },
    ],
  },
  {
    number: 2,
    documents: [
      { name: "doc-2.1", length: 42 },
      { name: "doc-2.2", length: 42 },
      { name: "doc-2.3", length: 42 },
      { name: "doc-2.4", length: 42 },
      { name: "doc-2.5", length: 42 },
    ],
  },
  {
    number: 3,
    documents: [
      { name: "doc-3.1", length: 42 },
      { name: "doc-3.2", length: 42 },
      { name: "doc-3.3", length: 42 },
      { name: "doc-3.4", length: 42 },
      { name: "doc-3.5", length: 42 },
      { name: "doc-3.6", length: 42 },
      { name: "doc-3.7", length: 42 },
    ],
  },
  {
    number: 4,
    documents: [
      { name: "doc-4.1", length: 42 },
      { name: "doc-4.2", length: 42 },
      { name: "doc-4.3", length: 42 },
      { name: "doc-4.4", length: 42 },
      { name: "doc-4.5", length: 42 },
    ],
  },
  {
    number: 6,
    documents: [
      { name: "doc-6.1", length: 42 },
      { name: "doc-6.2", length: 42 },
      { name: "doc-6.3", length: 42 },
      { name: "doc-6.4", length: 42 },
      { name: "doc-6.5", length: 42 },
      { name: "doc-6.6", length: 42 },
      { name: "doc-6.7", length: 42 },
      { name: "doc-6.8", length: 42 },
    ],
  },
  {
    number: 7,
    documents: [
      { name: "doc-7.1", length: 42 },
      { name: "doc-7.2", length: 42 },
      { name: "doc-7.3", length: 42 },
      { name: "doc-7.4", length: 42 },
      { name: "doc-7.5", length: 42 },
      { name: "doc-7.6", length: 42 },
      { name: "doc-7.7", length: 42 },
      { name: "doc-7.8", length: 42 },
    ],
  },
  {
    number: 8,
    documents: [
      { name: "doc-8.1", length: 42 },
      { name: "doc-8.2", length: 42 },
      { name: "doc-8.3", length: 42 },
    ],
  },
  {
    number: 9,
    documents: [
      { name: "doc-9.1", length: 42 },
      { name: "doc-9.2", length: 42 },
    ],
  },
  {
    number: 10,
    documents: [
      { name: "doc-10.1", length: 42 },
      { name: "doc-10.2", length: 42 },
      { name: "doc-10.3", length: 42 },
      { name: "doc-10.4", length: 42 },
    ],
  },
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
            <Accordion w="100%" allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight="semibold"
                  >
                    Documents to be annotated
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Box>
                    <Box mb={2}>
                      <HStack spacing={2}>
                        <Box>
                          <Button
                            colorScheme="teal"
                            size="sm"
                            variant="ghost"
                            mr={2}
                          >
                            Select all
                          </Button>
                          <Button colorScheme="teal" size="sm" variant="ghost">
                            Reset selection
                          </Button>
                        </Box>
                      </HStack>
                    </Box>
                    <DocumentTable
                      documents={availableDocs.flatMap((d) => d.documents)}
                    />
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion w="100%" allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight="semibold"
                  >
                    Documents to use as context
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Box>
                    <Box mb={2}>
                      <HStack spacing={2}>
                        <Box>
                          <Button
                            colorScheme="teal"
                            size="sm"
                            variant="ghost"
                            mr={2}
                          >
                            Select all
                          </Button>
                          <Button colorScheme="teal" size="sm" variant="ghost">
                            Reset selection
                          </Button>
                        </Box>
                      </HStack>
                    </Box>
                    <DocumentTable
                      documents={availableDocs.flatMap((d) => d.documents)}
                    />
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
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
            Start processing
          </Button>
          <Button size="lg" colorScheme="red">
            Reset
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
}
