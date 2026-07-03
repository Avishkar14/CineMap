import type { MovieGraph } from "../types/Graph";
import GraphNode from "./GraphNode";

type GraphViewProps = {
    graph: MovieGraph | null;
};

function GraphView({ graph }: GraphViewProps) {

    if (!graph) {
        return (
            <div className="graph-view">
                <h2>Graph</h2>
                <p>Select a movie to load its graph.</p>
            </div>
        );
    }

    return (
        <div className="graph-view">

            {graph.nodes.map((node, index) => (

                <GraphNode
                    key={node.id}
                    node={node}
                    x={40 + (index % 5) * 140}
                    y={40 + Math.floor(index / 5) * 180}
                />

            ))}

        </div>
    );
}

export default GraphView;