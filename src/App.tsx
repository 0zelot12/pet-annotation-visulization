/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Card, CardBody, CardHeader, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { annotationResult } from './data'

export interface AnnotationResult {
  name: string
  tokens: string[]
  presentEntities: Entity[]
  recognizedEntities: Entity[]
}

interface Entity {
  type: string
  startIndex: number
  tokens: string[]
}

export function Annotation({ text, type }: { text: string, type: string }) {
  if (type === "ACTIVITY") {
    return <Text as='span' backgroundColor='teal.100'>{text}</Text>
  } else if (type === "ACTIVITY_DATA") {
    return <Text as='span' backgroundColor='orange.100'>{text}</Text>
  } else if (type === "ACTOR") {
    return <Text as='span' backgroundColor='red.100'>{text}</Text>
  } else {
    return <Text as='span'>{text}</Text>
  }
}

export function AnnotationText({ tokens, entities }: { tokens: string[], entities: Entity[] }) {
  const result: { type: string, tokens: string[] }[] = [];
  for (let i = 0; i < tokens.length;) {
    const matchedEntity = entities.find(e => e.startIndex === i);
    if (matchedEntity) {
      result.push({ type: matchedEntity.type, tokens: matchedEntity.tokens })
      i += matchedEntity.tokens.length
    } else {
      result.push({ type: "O", tokens: [tokens[i]] })
      i++;
    }
  }
  return (
    <Text>{result.map(r => <Annotation type={r.type} text={r.tokens.join('')} />)}</Text>
  )
}

export default function App() {
  return (
    <Box padding="2rem">
      <Heading mb={4}>PET Annotation Visualization</Heading>
      <Text fontSize='xl'>
        Select a file to display.
      </Text>
      <Button size='lg' colorScheme='green' mt='24px'>
        Select a file
      </Button>
      <SimpleGrid columns={2} spacing={2} mt='24px'>
        <Card>
          <CardHeader>
            <Heading size='md'>Reference</Heading>
          </CardHeader>
          <CardBody>
            <AnnotationText tokens={annotationResult.tokens} entities={annotationResult.presentEntities} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'>Model</Heading>
          </CardHeader>
          <CardBody>
            <AnnotationText tokens={annotationResult.tokens} entities={annotationResult.recognizedEntities} />
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box >
  )
}
