export interface Genre {
    id: number;
    name: string;
}

export interface MovieNode {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    genres: Genre[] | null;
}

export interface MovieEdge {
    source: number;
    target: number;
    weight: number;
}

export interface MovieGraph {
    nodes: MovieNode[];
    edges: MovieEdge[];
}