import { HStack, Tag, TagLabel } from "@chakra-ui/react";
import { Document } from "../pages/annotation";

function DocumentTag({ label }: { label: string }) {
  return (
    <Tag colorScheme="teal" size="lg" variant="outline" cursor="pointer">
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
}

export default function DocumentTagDisplay({
  documents,
}: {
  documents: Document[];
}) {
  return (
    <HStack>
      {documents.map((document) => (
        <DocumentTag label={document.name} />
      ))}
    </HStack>
  );
}
