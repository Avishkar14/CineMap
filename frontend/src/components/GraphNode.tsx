import type { MovieNode } from "../types/Graph";

type GraphNodeProps = {
    node: MovieNode;
    x: number;
    y: number;
};

function GraphNode({ node, x, y }: GraphNodeProps) {
    return (
        <div
            className="graph-node"
            style={{
                left: `${x}px`,
                top: `${y}px`
            }}
        >
            <img
                src={`https://image.tmdb.org/t/p/w200${node.poster_path}`}
                alt={node.title}
            />

            <span>{node.title}</span>
        </div>
    );
}

export default GraphNode;