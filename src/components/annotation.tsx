import { Tag, Tooltip } from "@chakra-ui/react";

export function Annotation({ text, type }: { text: string; type: string }) {
  if (type === "ACTIVITY") {
    return (
      <Tooltip label="Activity" fontSize="md">
        <Tag as="span" backgroundColor="teal.100">
          {text}
        </Tag>
      </Tooltip>
    );
  } else if (type === "ACTIVITY_DATA") {
    return (
      <Tooltip label="Activity Data" fontSize="md">
        <Tag as="span" backgroundColor="orange.100">
          {text}
        </Tag>
      </Tooltip>
    );
  } else if (type === "ACTOR") {
    return (
      <Tooltip label="Actor" fontSize="md">
        <Tag as="span" backgroundColor="red.100">
          {text}
        </Tag>
      </Tooltip>
    );
  } else {
    return (
      <Tooltip label="No Enitity" fontSize="md">
        <Tag as="span">{text}</Tag>
      </Tooltip>
    );
  }
}
