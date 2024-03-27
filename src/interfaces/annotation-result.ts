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

export function plainToClass(dataString: string): AnnotationResult {
  const importedData = JSON.parse(dataString);
  return {
    name: importedData.document_name,
    overall: {
      precision: importedData.metrics.overall.precision,
      recall: importedData.metrics.overall.recall,
      f1_score: importedData.metrics.overall.f1_score,
      true_positives: importedData.metrics.overall.true_positives,
      reference_count: importedData.metrics.overall.reference_count,
    },
    actor: {
      precision: importedData.metrics.actor.precision,
      recall: importedData.metrics.actor.recall,
      f1_score: importedData.metrics.actor.f1_score,
      true_positives: importedData.metrics.actor.true_positives,
      reference_count: importedData.metrics.actor.reference_count,
    },
    activity: {
      precision: importedData.metrics.activity.precision,
      recall: importedData.metrics.activity.recall,
      f1_score: importedData.metrics.activity.f1_score,
      true_positives: importedData.metrics.activity.true_positives,
      reference_count: importedData.metrics.activity.reference_count,
    },
    activity_data: {
      precision: importedData.metrics.activity_data.precision,
      recall: importedData.metrics.activity_data.recall,
      f1_score: importedData.metrics.activity_data.f1_score,
      true_positives: importedData.metrics.activity_data.true_positives,
      reference_count: importedData.metrics.activity_data.reference_count,
    },
    tokens: importedData.tokens,
    present_entities: importedData.present_entities.map(
      (e: { type: string; start_index: number; tokens: string[] }) => {
        return {
          type: e.type,
          start_index: e.start_index,
          tokens: e.tokens,
        };
      }
    ),
    recognized_entities: importedData.recognized_entities.map(
      (e: { type: string; start_index: number; tokens: string[] }) => {
        return {
          type: e.type,
          start_index: e.start_index,
          tokens: e.tokens,
        };
      }
    ),
    present_relations: importedData.present_relations.map(
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
