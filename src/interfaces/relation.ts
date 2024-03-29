import { Entity } from "./entity";

export interface Relation {
  type: string;
  source: Entity;
  target: Entity;
}
