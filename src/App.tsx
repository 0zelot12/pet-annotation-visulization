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
} from '@chakra-ui/react'
import { useState } from 'react'

import FileUpload from './components/FileUpload'

export interface Metrics {
  f1_score: number
  precision: number
  recall: number
}

export interface AnnotationResult {
  name: string
  overall: Metrics
  actor: Metrics
  activity: Metrics
  activity_data: Metrics
  tokens: string[]
  present_entities: Entity[]
  recognized_entities: Entity[]
}

interface Entity {
  type: string
  start_index: number
  tokens: string[]
}

export function Annotation({ text, type }: { text: string, type: string }) {
  if (type === "ACTIVITY") {
    return <Text as='span' backgroundColor='teal.100'>{text + ' '}</Text>
  } else if (type === "ACTIVITY_DATA") {
    return <Text as='span' backgroundColor='orange.100'>{text + ' '}</Text>
  } else if (type === "ACTOR") {
    return <Text as='span' backgroundColor='red.100'>{text + ' '}</Text>
  } else {
    return text + ' '
  }
}

export function AnnotationText({ tokens, entities }: { tokens: string[], entities: Entity[] }) {
  const result: { type: string, tokens: string[] }[] = [];
  for (let i = 0; i < tokens.length;) {
    const matchedEntity = entities.find(e => e.start_index === i);
    if (matchedEntity) {
      result.push({ type: matchedEntity.type, tokens: matchedEntity.tokens })
      i += matchedEntity.tokens.length
    } else {
      result.push({ type: "O", tokens: [tokens[i]] })
      i++;
    }
  }
  return (
    <Text lineHeight={2}>{result.map(r => <Annotation type={r.type} text={r.tokens.join(' ')} />)}</Text>
  )
}

export default function App() {
  const [annotationResult, setAnnotationResult] = useState<AnnotationResult | null>(null);

  const toast = useToast();

  const handleInput = async ($event: any) => {
    const file = $event.target.files && $event.target.files[0];
    if (!file) {
      return;
    }

    // Reset file input
    $event.target.value = null;

    const dataString = await file.text();
    const importedData = JSON.parse(dataString);

    const annotationResult: AnnotationResult = {
      name: importedData.document_name,
      overall: { precision: importedData.metrics.overall.precision, recall: importedData.metrics.overall.recall, f1_score: importedData.metrics.overall.f1_score },
      actor: { precision: importedData.metrics.actor.precision, recall: importedData.metrics.actor.recall, f1_score: importedData.metrics.actor.f1_score },
      activity: { precision: importedData.metrics.activity.precision, recall: importedData.metrics.activity.recall, f1_score: importedData.metrics.activity.f1_score },
      activity_data: { precision: importedData.metrics.activity_data.precision, recall: importedData.metrics.activity_data.recall, f1_score: importedData.metrics.activity_data.f1_score },
      tokens: importedData.tokens,
      present_entities: importedData.present_entities.map((e: { type: string; start_index: number; tokens: string[] }) => {
        return {
          type: e.type,
          start_index: e.start_index,
          tokens: e.tokens,
        }
      }),
      recognized_entities: importedData.recognized_entities.map((e: { type: string; start_index: number; tokens: string[] }) => {
        return {
          type: e.type,
          start_index: e.start_index,
          tokens: e.tokens,
        }
      }),
    };

    setAnnotationResult(annotationResult);

    toast({
      title: 'File unploaded.',
      description: "File uploaded successfully!",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })

  }
  return (
    <Box padding="2rem">
      <Heading mb={4}>PET Annotation Visualization</Heading>
      <Text fontSize='xl'>
        Select a file to display.
      </Text>
      <FileUpload onInput={handleInput} />
      {annotationResult &&
        <>
          <Card mt={4}>
            <CardHeader>
              <Heading size='md'>Entity metrics</Heading>
            </CardHeader>
            <CardBody>
              <Tabs variant='enclosed' colorScheme='green'>
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
                        <StatNumber>{annotationResult.overall.f1_score}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Recall</StatLabel>
                        <StatNumber>{annotationResult.overall.recall}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Precision</StatLabel>
                        <StatNumber>{annotationResult.overall.precision}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Length</StatLabel>
                        <StatNumber>{annotationResult.tokens.length}</StatNumber>
                      </Stat>
                    </StatGroup>
                  </TabPanel>
                  <TabPanel>
                    <StatGroup>
                      <Stat>
                        <StatLabel>F1-Score</StatLabel>
                        <StatNumber>{annotationResult.actor.f1_score}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Recall</StatLabel>
                        <StatNumber>{annotationResult.actor.recall}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Precision</StatLabel>
                        <StatNumber>{annotationResult.actor.precision}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Length</StatLabel>
                        <StatNumber>{annotationResult.tokens.length}</StatNumber>
                      </Stat>
                    </StatGroup>
                  </TabPanel>
                  <TabPanel>
                    <StatGroup>
                      <Stat>
                        <StatLabel>F1-Score</StatLabel>
                        <StatNumber>{annotationResult.activity.f1_score}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Recall</StatLabel>
                        <StatNumber>{annotationResult.activity.recall}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Precision</StatLabel>
                        <StatNumber>{annotationResult.activity.precision}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Length</StatLabel>
                        <StatNumber>{annotationResult.tokens.length}</StatNumber>
                      </Stat>
                    </StatGroup>
                  </TabPanel>
                  <TabPanel>
                    <StatGroup>
                      <Stat>
                        <StatLabel>F1-Score</StatLabel>
                        <StatNumber>{annotationResult.activity_data.f1_score}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Recall</StatLabel>
                        <StatNumber>{annotationResult.activity_data.recall}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Precision</StatLabel>
                        <StatNumber>{annotationResult.activity_data.precision}</StatNumber>
                      </Stat>
                      <Stat>
                        <StatLabel>Length</StatLabel>
                        <StatNumber>{annotationResult.tokens.length}</StatNumber>
                      </Stat>
                    </StatGroup>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </CardBody>
          </Card>
          <SimpleGrid columns={2} spacing={2} mt='24px'>
            <Card>
              <CardHeader>
                <Heading size='md'>
                  <Text as='span' marginRight={2}>Model</Text>
                  <Tag colorScheme='green'>GPT-3.5-Turbo</Tag>
                </Heading>
              </CardHeader>
              <CardBody>
                <AnnotationText tokens={annotationResult.tokens} entities={annotationResult.recognized_entities} />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='md'>Reference</Heading>
              </CardHeader>
              <CardBody>
                <AnnotationText tokens={annotationResult.tokens} entities={annotationResult.present_entities} />
              </CardBody>
            </Card>
          </SimpleGrid>
        </>}
    </Box >
  )
}
