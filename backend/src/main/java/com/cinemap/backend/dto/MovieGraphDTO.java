package com.cinemap.backend.dto;

import java.util.List;

public class MovieGraphDTO {

    private List<MovieNodeDTO> nodes;
    private List<MovieEdgeDTO> edges;

    public MovieGraphDTO() {
    }

    public List<MovieNodeDTO> getNodes() {
        return nodes;
    }

    public void setNodes(List<MovieNodeDTO> nodes) {
        this.nodes = nodes;
    }

    public List<MovieEdgeDTO> getEdges() {
        return edges;
    }

    public void setEdges(List<MovieEdgeDTO> edges) {
        this.edges = edges;
    }
}