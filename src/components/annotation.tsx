import { Text } from "@chakra-ui/react";

export function Annotation({ text, type }: { text: string; type: string }) {
  if (type === "ACTIVITY") {
    return (
      <Text as="span" backgroundColor="teal.100">
        {text + " "}
      </Text>
    );
  } else if (type === "ACTIVITY_DATA") {
    return (
      <Text as="span" backgroundColor="orange.100">
        {text + " "}
      </Text>
    );
  } else if (type === "ACTOR") {
    return (
      <Text as="span" backgroundColor="red.100">
        {text + " "}
      </Text>
    );
  } else {
    return text + " ";
  }
}
