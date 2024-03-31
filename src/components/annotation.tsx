import { Tag, Tooltip } from "@chakra-ui/react";

export function Annotation({ text, type }: { text: string; type: string }) {
  if (type === "ACTIVITY") {
    return (
      <Tooltip label="ACTIVITY" fontSize="md">
        <Tag as="span" backgroundColor="teal.100">
          {text}
        </Tag>
      </Tooltip>
    );
  } else if (type === "ACTIVITY_DATA") {
    return (
      <Tooltip label="ACTIVITY_DATA" fontSize="md">
        <Tag as="span" backgroundColor="orange.100">
          {text}
        </Tag>
      </Tooltip>
    );
  } else if (type === "ACTOR") {
    return (
      <Tooltip label="ACTOR" fontSize="md">
        <Tag as="span" backgroundColor="red.100">
          {text}
        </Tag>
      </Tooltip>
    );
  } else if (type === "CONDITION_SPECIFICATION") {
    return (
      <Tooltip label="CONDITION_SPECIFICATION" fontSize="md">
        <Tag as="span" backgroundColor="purple.100">
          {text}
        </Tag>
      </Tooltip>
    );
  } else if (type === "XOR_GATEWAY") {
    return (
      <Tooltip label="XOR_GATEWAY" fontSize="md">
        <Tag as="span" backgroundColor="cyan.100">
          {text}
        </Tag>
      </Tooltip>
    );
  } else if (type === "AND_GATEWAY") {
    return (
      <Tooltip label="AND_GATEWAY" fontSize="md">
        <Tag as="span" backgroundColor="cyan.100">
          {text}
        </Tag>
      </Tooltip>
    );
  } else if (type === "FURTHER_SPECIFICATION") {
    return (
      <Tooltip label="FURTHER_SPECIFICATION" fontSize="md">
        <Tag as="span" backgroundColor="cyan.100">
          {text}
        </Tag>
      </Tooltip>
    );
  } else {
    return (
      <Tooltip label="NO_ENTITY" fontSize="md">
        <Tag as="span">{text}</Tag>
      </Tooltip>
    );
  }
}
