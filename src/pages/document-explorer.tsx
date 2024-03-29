import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { AnnotationText } from "../components/annotation-text";
import { PetDocument, plainToClass } from "../interfaces/pet-document";
import RelationDisplay from "../components/relation-display";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";

export default function DocumentExplorer() {
  const [documentName, setDocumentName] = useState<string>("");
  const [document, setDocument] = useState<PetDocument | null>(null);
  const handleFetchDocument = async () => {
    const response = await fetch(
      `http://localhost:8000/document?document_name=${documentName}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const dataString = await response.text();
    setDocument(plainToClass(dataString));
  };
  return (
    <Box padding="2rem">
      <Heading mb={4}>Document Explorer</Heading>
      <Text fontSize="xl">Select a document to explore.</Text>
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
      <VStack spacing={2} align="start" mt={4}>
        <Input
          value={documentName}
          placeholder="Document Name"
          size="lg"
          onChange={(event) => setDocumentName(event.target.value)}
        ></Input>
        <Button size="lg" colorScheme="teal" onClick={handleFetchDocument}>
          Fetch Document
        </Button>
        {document && (
          <>
            <Card>
              <CardHeader>
                <Heading size="md">{document.document_name}</Heading>
              </CardHeader>
              <CardBody>
                <AnnotationText
                  entities={document.entities}
                  tokens={document.tokens}
                ></AnnotationText>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md">Relations</Heading>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="start">
                  {document.relations.map((r) => (
                    <RelationDisplay relation={r} />
                  ))}
                </VStack>
              </CardBody>
            </Card>
          </>
        )}
      </VStack>
    </Box>
  );
}
