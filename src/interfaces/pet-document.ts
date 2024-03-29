import { Entity } from "./entity";
import { Relation } from "./relation";

export interface PetDocument {
  document_name: string;
  entities: Entity[];
  ner_tags: string[];
  relations: Relation[];
  tokens: string[];
}

export function plainToClass(dataString: string): PetDocument {
  const importedData = JSON.parse(dataString);
  return {
    document_name: importedData.document_name,
    ner_tags: importedData.ner_tags,
    tokens: importedData.tokens,
    entities: importedData.entities.map(
      (e: { type: string; start_index: number; tokens: string[] }) => {
        return {
          type: e.type,
          start_index: e.start_index,
          tokens: e.tokens,
        };
      }
    ),
    relations: importedData.relations.map(
      (r: {
        type: string;
        source: { type: string; start_index: number; tokens: string[] };
        target: { type: string; start_index: number; tokens: string[] };
      }) => {
        return { type: r.type, source: r.source, target: r.target };
      }
    ),
  };
}
