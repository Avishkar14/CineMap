package com.cinemap.backend.service;

import com.cinemap.backend.dto.MovieDetailsDTO;
import com.cinemap.backend.dto.SearchResponseDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TMDBService {
    private final RestTemplate restTemplate;

    @Value("${tmdb.api.key}")
    private String apiKey;

    @Value("${tmdb.base.url}")
    private String baseUrl;

    public TMDBService(RestTemplate restTemplate1) {
        this.restTemplate = restTemplate1;
    }

    public SearchResponseDTO searchMovies(String query){
        String url = baseUrl + "/search/movie?api_key=" + apiKey + "&query=" + query;
//        System.out.println(url);
//        return restTemplate.getForObject(url, SearchResponseDTO.class);
        SearchResponseDTO response = restTemplate.getForObject(url, SearchResponseDTO.class);
//        System.out.println("First Movie: " + response.getResults().get(0).getTitle());
//        System.out.println(response.getResults().get(0).getTitle());
        return response;
    }
    public MovieDetailsDTO getMovieDetails(int movieId){
        String url = baseUrl + "/movie/" + movieId+"?api_key="+apiKey;
        return restTemplate.getForObject(url,MovieDetailsDTO.class);
    }
}
