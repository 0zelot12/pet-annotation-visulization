import { Box, Tag } from "@chakra-ui/react";
import { Relation } from "../interfaces/relation";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export interface RelationDisplayProps {
  relation: Relation;
}

export default function RelationDisplay({ relation }: RelationDisplayProps) {
  return (
    <Box>
      {relation.source ? (
        <Tag size="lg" mr={1}>
          {relation.source.tokens.join(" ")}
        </Tag>
      ) : (
        <Tag size="lg" mr={1}>
          {"Source not set"}
        </Tag>
      )}
      <ArrowForwardIcon mr={1} />
      <Tag size="lg" mr={1}>
        {relation.type}
      </Tag>
      <ArrowForwardIcon mr={1} />
      {relation.target ? (
        <Tag size="lg">{relation.target.tokens.join(" ")}</Tag>
      ) : (
        <Tag size="lg">{"Target not set"}</Tag>
      )}
    </Box>
  );
}
