import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  useToast,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
  Tag,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
  AnnotationResult,
  plainToClass,
} from "../interfaces/annotation-result";
import { AnnotationText } from "../components/annotation-text";
import FileUpload from "../components/file-upload";

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
    setAnnotationResult(plainToClass(dataString));

    setIsLoading(false);

    toast({
      title: "File unploaded.",
      description: "File uploaded successfully!",
      status: "success",
      duration: 9000,
      isClosable: true,
      variant: "left-accent",
      position: "top-right",
    });
  };

  return (
    <Box padding="2rem">
      <Heading mb={4}>PET Annotation Visualization</Heading>
      <Text fontSize="xl">Select a file to display.</Text>
      <FileUpload onInput={handleInput} />
      {isLoading && (
        <Flex mt="192px" justifyContent="center">
          <Spinner size="xl" color="green" />
        </Flex>
      )}
      {annotationResult && !isLoading && (
        <>
          <Card mt={4}>
            <CardHeader>
              <Heading size="md">Entity metrics</Heading>
            </CardHeader>
            <CardBody>
              <Tabs variant="enclosed" colorScheme="green">
                <TabList marginBottom={2}>
                  <Tab>Overall</Tab>
                  <Tab>Actor</Tab>
                  <Tab>Activity</Tab>
                  <Tab>Activity Data</Tab>
                  <Tab>Further Specification</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <StatGroup>
                      <Stat>
                        <StatLabel>F1-Score</StatLabel>
                        <StatNumber>
                          {annotationResult.overall.f1_score}
                        </StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Recall</StatLabel>
                        <StatNumber>
                          {annotationResult.overall.recall}
                        </StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Precision</StatLabel>
                        <StatNumber>
                          {annotationResult.overall.precision}
                        </StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Absolute</StatLabel>
                        <StatNumber>
                          {annotationResult.overall.true_positives}/
                          {annotationResult.overall.reference_count}
                        </StatNumber>
                      </Stat>
                    </StatGroup>
                  </TabPanel>
                  <TabPanel>
                    <StatGroup>
                      <Stat>
                        <StatLabel>F1-Score</StatLabel>
                        <StatNumber>
                          {annotationResult.actor.f1_score}
                        </StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Recall</StatLabel>
                        <StatNumber>{annotationResult.actor.recall}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Precision</StatLabel>
                        <StatNumber>
                          {annotationResult.actor.precision}
                        </StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Absolute</StatLabel>
                        <StatNumber>
                          {annotationResult.actor.true_positives}/
                          {annotationResult.actor.reference_count}
                        </StatNumber>
                      </Stat>
                    </StatGroup>
                  </TabPanel>
                  <TabPanel>
                    <StatGroup>
                      <Stat>
                        <StatLabel>F1-Score</StatLabel>
                        <StatNumber>
                          {annotationResult.activity.f1_score}
                        </StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Recall</StatLabel>
                        <StatNumber>
                          {annotationResult.activity.recall}
                        </StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Precision</StatLabel>
                        <StatNumber>
                          {annotationResult.activity.precision}
                        </StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Absolute</StatLabel>
                        <StatNumber>
                          {annotationResult.activity.true_positives}/
                          {annotationResult.activity.reference_count}
                        </StatNumber>
                      </Stat>
                    </StatGroup>
                  </TabPanel>
                  <TabPanel>
                    <StatGroup>
                      <Stat>
                        <StatLabel>F1-Score</StatLabel>
                        <StatNumber>
                          {annotationResult.activity_data.f1_score}
                        </StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Recall</StatLabel>
                        <StatNumber>
                          {annotationResult.activity_data.recall}
                        </StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Precision</StatLabel>
                        <StatNumber>
                          {annotationResult.activity_data.precision}
                        </StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Absolute</StatLabel>
                        <StatNumber>
                          {annotationResult.activity_data.true_positives}/
                          {annotationResult.activity_data.reference_count}
                        </StatNumber>
                      </Stat>
                    </StatGroup>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </CardBody>
          </Card>
          <SimpleGrid columns={2} spacing={2} mt="24px">
            <Card>
              <CardHeader>
                <Heading size="md">
                  <Text as="span" marginRight={2}>
                    Model
                  </Text>
                  <Tag colorScheme="green">GPT-3.5-Turbo</Tag>
                </Heading>
              </CardHeader>
              <CardBody>
                <AnnotationText
                  tokens={annotationResult.tokens}
                  entities={annotationResult.recognized_entities}
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md">Reference</Heading>
              </CardHeader>
              <CardBody>
                <AnnotationText
                  tokens={annotationResult.tokens}
                  entities={annotationResult.present_entities}
                />
              </CardBody>
            </Card>
          </SimpleGrid>
          <Card mt={4}>
            <CardHeader>
              <Heading size="md">Relations</Heading>
            </CardHeader>
            <CardBody>
              {annotationResult.present_relations.map((r) => {
                return (
                  <Box mb={4}>
                    {r.source ? (
                      <Tag size="lg" mr={1}>
                        {r.source.tokens.join(" ")}
                      </Tag>
                    ) : (
                      <Tag size="lg" mr={1}>
                        {"Source not set"}
                      </Tag>
                    )}
                    <ArrowForwardIcon mr={1} />
                    <Tag size="lg" mr={1}>
                      {r.type}
                    </Tag>
                    <ArrowForwardIcon mr={1} />
                    {r.target ? (
                      <Tag size="lg">{r.target.tokens.join(" ")}</Tag>
                    ) : (
                      <Tag size="lg">{"Target not set"}</Tag>
                    )}
                  </Box>
                );
              })}
            </CardBody>
          </Card>
        </>
      )}
    </Box>
  );
}
