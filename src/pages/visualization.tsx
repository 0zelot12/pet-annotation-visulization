import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  useToast,
  Spinner,
  Flex,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  AnnotationResult,
  plainToClass,
} from "../interfaces/annotation-result";
import { AnnotationText } from "../components/annotation-text";
import FileUpload from "../components/file-upload";
import RelationDisplay from "../components/relation-display";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import EntityMetrics from "../components/entity-metrics";
import RelationMetrics from "../components/relation-metrics";

export default function Visualization() {
  const [annotationResult, setAnnotationResult] =
    useState<AnnotationResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toast = useToast();

  const handleInput = async ($event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const file = $event.target.files && $event.target.files[0];
    if (!file) {
      return;
    }

    $event.target.value = "";

    const dataString = await file.text();
    const annotationResult = plainToClass(dataString);

    setAnnotationResult(annotationResult);

    setIsLoading(false);

    toast({
      title: "Upload",
      description: `${annotationResult.name} uploaded successfully!`,
      duration: 2250,
      variant: "left-accent",
      colorScheme: "teal",
      position: "top-right",
    });
  };

  return (
    <Box padding="2rem">
      <Heading mb={4}>Visualization</Heading>
      <Text fontSize="xl">Select a file to display.</Text>
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
      <FileUpload onInput={handleInput} />
      {isLoading && (
        <Flex mt="192px" justifyContent="center">
          <Spinner size="xl" color="teal" />
        </Flex>
      )}
      {annotationResult && !isLoading && (
        <>
          <EntityMetrics annotationResult={annotationResult} />
          <SimpleGrid columns={2} spacing={2} mt="24px">
            <Card>
              <CardHeader>
                <Heading size="md">Reference Entities</Heading>
              </CardHeader>
              <CardBody>
                <AnnotationText
                  tokens={annotationResult.tokens}
                  entities={annotationResult.present_entities}
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md">Model Entities</Heading>
              </CardHeader>
              <CardBody>
                <AnnotationText
                  tokens={annotationResult.tokens}
                  entities={annotationResult.recognized_entities}
                />
              </CardBody>
            </Card>
          </SimpleGrid>
          <RelationMetrics annotationResult={annotationResult} />
          <Box mt={4}>
            <SimpleGrid columns={2} spacing={2}>
              <Card>
                <CardHeader>
                  <Heading size="md">Reference Relations</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4} align="start">
                    {annotationResult.present_relations.map((r, i) => (
                      <RelationDisplay key={i} relation={r} />
                    ))}
                  </VStack>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md">Model Relations</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4} align="start">
                    {annotationResult.recognized_relations.map((r, i) => (
                      <RelationDisplay key={i} relation={r} />
                    ))}
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </Box>
        </>
      )}
    </Box>
  );
}
