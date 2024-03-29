import { Box, Tag } from "@chakra-ui/react";
import { Relation } from "../interfaces/relation";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Annotation } from "./annotation";

export interface RelationDisplayProps {
  relation: Relation;
}

export default function RelationDisplay({ relation }: RelationDisplayProps) {
  return (
    <Box>
      <Annotation
        text={relation.source.tokens.join(" ")}
        type={relation.source.type}
      />
      <ArrowForwardIcon />
      <Tag>{relation.type}</Tag>
      <ArrowForwardIcon />
      <Annotation
        text={relation.target.tokens.join(" ")}
        type={relation.target.type}
      />
    </Box>
  );
}
