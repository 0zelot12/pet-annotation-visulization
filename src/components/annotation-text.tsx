import { Entity } from "../interfaces/entity";
import { Text } from "@chakra-ui/react";
import { Annotation } from "./annotation";

export function AnnotationText({
  tokens,
  entities,
}: {
  tokens: string[];
  entities: Entity[];
}) {
  const result: { type: string; tokens: string[] }[] = [];
  for (let i = 0; i < tokens.length; ) {
    const matchedEntity = entities.find((e) => e.start_index === i);
    if (matchedEntity) {
      result.push({ type: matchedEntity.type, tokens: matchedEntity.tokens });
      i += matchedEntity.tokens.length;
    } else {
      result.push({ type: "O", tokens: [tokens[i]] });
      i++;
    }
  }
  return (
    <Text lineHeight={2}>
      {result.map((r) => (
        <Annotation type={r.type} text={r.tokens.join(" ")} />
      ))}
    </Text>
  );
}
