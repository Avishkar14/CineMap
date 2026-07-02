package com.cinemap.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration //This tells Spring:  "This class contains bean definitions." -- Factory
public class AppConfig {
    //inside factory we write method that creates object i.e : You're telling Spring:
    //"Whenever someone needs a RestTemplate, use this method to create it."

    //A Bean is simply an object managed by Spring.
    @Bean //This tells Spring: "Execute this method once and store its returned object in the IoC Container."
    public RestTemplate restTemplate(){
        //it is Spring's HTTP client for sending REST API requests.
        return new RestTemplate();
    }
}
