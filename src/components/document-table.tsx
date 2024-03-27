import {
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Document } from "../pages/annotation";

export default function DocumentTable({
  documents,
}: {
  documents: Document[];
}) {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Selected</Th>
            <Th>Name</Th>
            <Th>Length (#Tokens)</Th>
            <Th>Entities</Th>
            <Th>Relations</Th>
          </Tr>
        </Thead>
        <Tbody>
          {documents.map((document) => (
            <Tr>
              <Td>
                <Checkbox colorScheme="teal" />
              </Td>
              <Td>{document.name}</Td>
              <Td>{Math.round(Math.random() * 1000)}</Td>
              <Td>{Math.round(Math.random() * 100)}</Td>
              <Td>{Math.round(Math.random() * 100)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
