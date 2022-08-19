import { Edge } from "./edge";
import { Position } from "./position";

export interface Node {
    position: Position;
    edges: Edge[];
}