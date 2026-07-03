package com.cinemap.backend.controller;

import com.cinemap.backend.dto.MovieDetailsDTO;
import com.cinemap.backend.dto.SearchResponseDTO;
import com.cinemap.backend.service.TMDBService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
@RestController
public class MovieController {
//CONSTRUCTOR INJECTION (DI)
    //field
    private final TMDBService tmdbService;
    //constructor
    public MovieController(TMDBService tmdbService1){
        this.tmdbService = tmdbService1;
    }

    @GetMapping("/search")
    public SearchResponseDTO searchMovies(@RequestParam String query){
        return tmdbService.searchMovies(query);
    }

    @GetMapping("/movie/{movieId}")
    public MovieDetailsDTO getMovie(@PathVariable int movieId){
        return tmdbService.getMovie(movieId);
    }
}
