package com.cinemap.backend.service;

import java.util.ArrayList;
import java.util.List;

import com.cinemap.backend.dto.*;
import org.springframework.stereotype.Service;

@Service
public class GraphService {
    private final TMDBService tmdbService;

    public GraphService(TMDBService tmdbService){
        this.tmdbService = tmdbService;
    }
    public MovieGraphDTO buildGraph(int movieId) {

        MovieDetailsDTO movie = tmdbService.getMovie(movieId);
        RecommendationResponseDTO recommendations = tmdbService.getRecommendations(movieId);
        MovieNodeDTO node = new MovieNodeDTO();

        node.setId(movie.getId());
        node.setTitle(movie.getTitle());
        node.setPoster_path(movie.getPoster_path());
        node.setVote_average(movie.getVote_average());
        node.setGenres(movie.getGenres());

        List<MovieNodeDTO> nodes = new ArrayList<>();
        nodes.add(node);
        for (MovieDTO recommendation : recommendations.getResults()) {

            MovieNodeDTO recommendationNode = new MovieNodeDTO();

            recommendationNode.setId(
                    recommendation.getId()
            );

            recommendationNode.setTitle(
                    recommendation.getTitle()
            );

            recommendationNode.setPoster_path(
                    recommendation.getPoster_path()
            );

            recommendationNode.setVote_average(
                    recommendation.getVote_average()
            );

            nodes.add(recommendationNode);
        }

        List<MovieEdgeDTO> edges = new ArrayList<>();
        for (MovieDTO recommendation : recommendations.getResults()) {

            MovieEdgeDTO edge = new MovieEdgeDTO();

            edge.setSource(movie.getId());

            edge.setTarget(
                    recommendation.getId()
            );

            edge.setWeight(1.0);

            edges.add(edge);
        }

        MovieGraphDTO movieGraph = new MovieGraphDTO();
        movieGraph.setNodes(nodes);
        movieGraph.setEdges(edges);

        return movieGraph;
    }
}