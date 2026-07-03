package com.cinemap.backend.controller;

import com.cinemap.backend.dto.MovieGraphDTO;
import com.cinemap.backend.service.GraphService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class GraphController {
    private final GraphService graphService;

    public GraphController(GraphService graphService) {
        this.graphService = graphService;
    }

    @GetMapping("/graph/{movieId}")
    public MovieGraphDTO buildGraph(@PathVariable int movieId) {
        return graphService.buildGraph(movieId);
    }
}
