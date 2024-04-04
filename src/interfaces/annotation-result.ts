import { Entity } from "./entity";
import { Metrics } from "./metrics";
import { Relation } from "./relation";

export interface AnnotationResult {
  name: string;

  overall: Metrics;
  actor: Metrics;
  activity: Metrics;
  activity_data: Metrics;
  and_gateway: Metrics;
  xor_gateway: Metrics;
  condition_specification: Metrics;
  further_specification: Metrics;

  overall_relation: Metrics;
  actor_performer: Metrics;
  actor_recipient: Metrics;
  uses: Metrics;
  flow: Metrics;
  same_gateway: Metrics;
  further_specification_relation: Metrics;

  tokens: string[];
  present_entities: Entity[];
  recognized_entities: Entity[];
  present_relations: Relation[];
  recognized_relations: Relation[];
}

export function plainToClass(dataString: string): AnnotationResult {
  const importedData = JSON.parse(dataString);
  return {
    name: importedData.document_name,
    overall: {
      precision: importedData.metrics.entity_metrics.overall.precision,
      recall: importedData.metrics.entity_metrics.overall.recall,
      f1_score: importedData.metrics.entity_metrics.overall.f1_score,
      true_positives:
        importedData.metrics.entity_metrics.overall.true_positives,
      reference_count:
        importedData.metrics.entity_metrics.overall.reference_count,
    },
    actor: {
      precision: importedData.metrics.entity_metrics.actor.precision,
      recall: importedData.metrics.entity_metrics.actor.recall,
      f1_score: importedData.metrics.entity_metrics.actor.f1_score,
      true_positives: importedData.metrics.entity_metrics.actor.true_positives,
      reference_count:
        importedData.metrics.entity_metrics.actor.reference_count,
    },
    activity: {
      precision: importedData.metrics.entity_metrics.activity.precision,
      recall: importedData.metrics.entity_metrics.activity.recall,
      f1_score: importedData.metrics.entity_metrics.activity.f1_score,
      true_positives:
        importedData.metrics.entity_metrics.activity.true_positives,
      reference_count:
        importedData.metrics.entity_metrics.activity.reference_count,
    },
    activity_data: {
      precision: importedData.metrics.entity_metrics.activity_data.precision,
      recall: importedData.metrics.entity_metrics.activity_data.recall,
      f1_score: importedData.metrics.entity_metrics.activity_data.f1_score,
      true_positives:
        importedData.metrics.entity_metrics.activity_data.true_positives,
      reference_count:
        importedData.metrics.entity_metrics.activity_data.reference_count,
    },
    further_specification: {
      precision:
        importedData.metrics.entity_metrics.further_specification.precision,
      recall: importedData.metrics.entity_metrics.further_specification.recall,
      f1_score:
        importedData.metrics.entity_metrics.further_specification.f1_score,
      true_positives:
        importedData.metrics.entity_metrics.further_specification
          .true_positives,
      reference_count:
        importedData.metrics.entity_metrics.further_specification
          .reference_count,
    },
    condition_specification: {
      precision:
        importedData.metrics.entity_metrics.condition_specification.precision,
      recall:
        importedData.metrics.entity_metrics.condition_specification.recall,
      f1_score:
        importedData.metrics.entity_metrics.condition_specification.f1_score,
      true_positives:
        importedData.metrics.entity_metrics.condition_specification
          .true_positives,
      reference_count:
        importedData.metrics.entity_metrics.condition_specification
          .reference_count,
    },
    and_gateway: {
      precision: importedData.metrics.entity_metrics.and_gateway.precision,
      recall: importedData.metrics.entity_metrics.and_gateway.recall,
      f1_score: importedData.metrics.entity_metrics.and_gateway.f1_score,
      true_positives:
        importedData.metrics.entity_metrics.and_gateway.true_positives,
      reference_count:
        importedData.metrics.entity_metrics.and_gateway.reference_count,
    },
    xor_gateway: {
      precision: importedData.metrics.entity_metrics.xor_gateway.precision,
      recall: importedData.metrics.entity_metrics.xor_gateway.recall,
      f1_score: importedData.metrics.entity_metrics.xor_gateway.f1_score,
      true_positives:
        importedData.metrics.entity_metrics.xor_gateway.true_positives,
      reference_count:
        importedData.metrics.entity_metrics.xor_gateway.reference_count,
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
    recognized_relations: importedData.recognized_relations.map(
      (r: {
        type: string;
        source: { type: string; start_index: number; tokens: string[] };
        target: { type: string; start_index: number; tokens: string[] };
      }) => {
        return { type: r.type, source: r.source, target: r.target };
      }
    ),
    actor_performer: {
      precision:
        importedData.metrics.relation_metrics.actor_performer.precision,
      recall: importedData.metrics.relation_metrics.actor_performer.recall,
      f1_score: importedData.metrics.relation_metrics.actor_performer.f1_score,
      true_positives:
        importedData.metrics.relation_metrics.actor_performer.true_positives,
      reference_count:
        importedData.metrics.relation_metrics.actor_performer.reference_count,
    },
    actor_recipient: {
      precision:
        importedData.metrics.relation_metrics.actor_recipient.precision,
      recall: importedData.metrics.relation_metrics.actor_recipient.recall,
      f1_score: importedData.metrics.relation_metrics.actor_recipient.f1_score,
      true_positives:
        importedData.metrics.relation_metrics.actor_recipient.true_positives,
      reference_count:
        importedData.metrics.relation_metrics.actor_recipient.reference_count,
    },
    flow: {
      precision: importedData.metrics.relation_metrics.flow.precision,
      recall: importedData.metrics.relation_metrics.flow.recall,
      f1_score: importedData.metrics.relation_metrics.flow.f1_score,
      true_positives: importedData.metrics.relation_metrics.flow.true_positives,
      reference_count:
        importedData.metrics.relation_metrics.flow.reference_count,
    },
    further_specification_relation: {
      precision:
        importedData.metrics.relation_metrics.further_specification.precision,
      recall:
        importedData.metrics.relation_metrics.further_specification.recall,
      f1_score:
        importedData.metrics.relation_metrics.further_specification.f1_score,
      true_positives:
        importedData.metrics.relation_metrics.further_specification
          .true_positives,
      reference_count:
        importedData.metrics.relation_metrics.further_specification
          .reference_count,
    },
    overall_relation: {
      precision: importedData.metrics.relation_metrics.overall.precision,
      recall: importedData.metrics.relation_metrics.overall.recall,
      f1_score: importedData.metrics.relation_metrics.overall.f1_score,
      true_positives:
        importedData.metrics.relation_metrics.overall.true_positives,
      reference_count:
        importedData.metrics.relation_metrics.overall.reference_count,
    },
    same_gateway: {
      precision: importedData.metrics.relation_metrics.same_gateway.precision,
      recall: importedData.metrics.relation_metrics.same_gateway.recall,
      f1_score: importedData.metrics.relation_metrics.same_gateway.f1_score,
      true_positives:
        importedData.metrics.relation_metrics.same_gateway.true_positives,
      reference_count:
        importedData.metrics.relation_metrics.same_gateway.reference_count,
    },
    uses: {
      precision: importedData.metrics.relation_metrics.uses.precision,
      recall: importedData.metrics.relation_metrics.uses.recall,
      f1_score: importedData.metrics.relation_metrics.uses.f1_score,
      true_positives: importedData.metrics.relation_metrics.uses.true_positives,
      reference_count:
        importedData.metrics.relation_metrics.uses.reference_count,
    },
  };
}
