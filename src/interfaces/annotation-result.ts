import { Entity } from "./entity";
import { Metrics } from "./metrics";
import { Relation } from "./relation";

export interface AnnotationResult {
  name: string;
  overall: Metrics;
  actor: Metrics;
  activity: Metrics;
  activity_data: Metrics;
  tokens: string[];
  present_entities: Entity[];
  recognized_entities: Entity[];
  present_relations: Relation[];
}
