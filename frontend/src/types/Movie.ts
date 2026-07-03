export interface Movie{
    id:number;
    title:string;
    poster_path:string;
}

export interface Genre{
    id:number;
    name:string;
}

export interface MovieDetails{
    id:number;
    title:string;
    poster_path:string;
    overview:string;
    runtime:number;
    vote_average:number;
    genres:Genre[] | null;
}