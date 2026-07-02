package com.cinemap.backend.dto;

import java.util.List;

public class SearchResponseDTO {
    private int page;
    private List<MovieDTO> results;
//empty const:
    public SearchResponseDTO() {
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public List<MovieDTO> getResults() {
        return results;
    }

    public void setResults(List<MovieDTO> results) {
        this.results = results;
    }
}
