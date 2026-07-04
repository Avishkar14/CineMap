import type { MovieGraph } from "../types/Graph";
// import GraphNode from "./GraphNode";

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
    const nodePositions = new Map<number, { x: number; y: number }>();

    graph.nodes.forEach((node, index) => {

        if (index === 0) {

            nodePositions.set(node.id, {
                x: 400,
                y: 250
            });

        } else {

            const angle =
                (2 * Math.PI * (index - 1)) /
                (graph.nodes.length - 1);

            nodePositions.set(node.id, {
                x: 400 + 180 * Math.cos(angle),
                y: 250 + 180 * Math.sin(angle)
            });

        }

    });

    return (
        <div className="graph-view">

            <svg width="800" height="500">

                {/* Draw Edges */}
                {graph.edges.map((edge, index) => {

                    const source = nodePositions.get(edge.source);
                    const target = nodePositions.get(edge.target);

                    if (!source || !target) return null;

                    return (
                        <line
                            key={index}
                            x1={source.x}
                            y1={source.y}
                            x2={target.x}
                            y2={target.y}
                            stroke="#888"
                            strokeWidth={2}
                        />
                    );
                })}

                {/* Draw Nodes */}
                {graph.nodes.map((node) => {

                    const position = nodePositions.get(node.id);

                    if (!position) return null;

                    return (
                        <g key={node.id}>

                            <circle
                                cx={position.x}
                                cy={position.y}
                                r={20}
                                fill="#3b82f6"
                            />

                            <text
                                x={position.x}
                                y={position.y + 35}
                                textAnchor="middle"
                                fill="white"
                                fontSize="12"
                            >
                                {node.title}
                            </text>

                        </g>
                    );

                })}

            </svg>

        </div>
    );
}

export default GraphView;