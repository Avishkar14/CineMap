package com.cinemap.backend.dto;

import java.util.List;

public class RecommendationResponseDTO {

    private List<MovieDTO> results;

    public RecommendationResponseDTO() {
    }

    public List<MovieDTO> getResults() {
        return results;
    }

    public void setResults(List<MovieDTO> results) {
        this.results = results;
    }
}