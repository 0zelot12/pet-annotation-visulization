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
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { AnnotationResult } from "../interfaces/annotation-result";
import { AnnotationText } from "../components/annotation-text";
import FileUpload from "../components/file-upload";

export default function Visualization() {
  const [annotationResult, setAnnotationResult] =
    useState<AnnotationResult | null>(null);

  const toast = useToast();

  const handleInput = async ($event: React.ChangeEvent<HTMLInputElement>) => {
    const file = $event.target.files && $event.target.files[0];
    if (!file) {
      return;
    }

    // Reset file input
    $event.target.value = "";

    const dataString = await file.text();
    const importedData = JSON.parse(dataString);

    const annotationResult: AnnotationResult = {
      name: importedData.document_name,
      overall: {
        precision: importedData.metrics.overall.precision,
        recall: importedData.metrics.overall.recall,
        f1_score: importedData.metrics.overall.f1_score,
        true_positives: importedData.metrics.overall.true_positives,
        reference_count: importedData.metrics.overall.reference_count,
      },
      actor: {
        precision: importedData.metrics.actor.precision,
        recall: importedData.metrics.actor.recall,
        f1_score: importedData.metrics.actor.f1_score,
        true_positives: importedData.metrics.actor.true_positives,
        reference_count: importedData.metrics.actor.reference_count,
      },
      activity: {
        precision: importedData.metrics.activity.precision,
        recall: importedData.metrics.activity.recall,
        f1_score: importedData.metrics.activity.f1_score,
        true_positives: importedData.metrics.activity.true_positives,
        reference_count: importedData.metrics.activity.reference_count,
      },
      activity_data: {
        precision: importedData.metrics.activity_data.precision,
        recall: importedData.metrics.activity_data.recall,
        f1_score: importedData.metrics.activity_data.f1_score,
        true_positives: importedData.metrics.activity_data.true_positives,
        reference_count: importedData.metrics.activity_data.reference_count,
      },
      tokens: importedData.tokens,
      present_entities: importedData.present_entities.map(
        (e: { type: string; start_index: number; tokens: string[] }) => {
          return {
            type: e.type,
            start_index: e.start_index,
            tokens: e.tokens,
          };
        }
      ),
      recognized_entities: importedData.recognized_entities.map(
        (e: { type: string; start_index: number; tokens: string[] }) => {
          return {
            type: e.type,
            start_index: e.start_index,
            tokens: e.tokens,
          };
        }
      ),
      present_relations: importedData.present_relations.map(
        (r: {
          type: string;
          source: { type: string; start_index: number; tokens: string[] };
          target: { type: string; start_index: number; tokens: string[] };
        }) => {
          return { type: r.type, source: r.source, target: r.target };
        }
      ),
    };

    setAnnotationResult(annotationResult);

    toast({
      title: "File unploaded.",
      description: "File uploaded successfully!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Box padding="2rem">
      <Heading mb={4}>PET Annotation Visualization</Heading>
      <Text fontSize="xl">Select a file to display.</Text>
      <FileUpload onInput={handleInput} />
      {annotationResult && (
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
