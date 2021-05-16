import { Component, OnInit } from '@angular/core';
import { MovieInfoService } from '../movie-info.service';
import {Movies} from '../interface/movies'

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.scss']
})
export class MoviesViewComponent implements OnInit {
  public movieList: Movies[]=[];

  constructor(
     public movieInfoService: MovieInfoService,
  ) { 
    this.movieInfoService.getMovieInfo().subscribe(res => {
      this.movieList = res.msg;
      console.log('resC',res)
    })
  }

  ngOnInit(): void {
  }

  getMovies() {
    this.movieInfoService.getMovieInfo().subscribe(res => {
      this.movieList = res.data;
      console.log('resNC',res)
    })
    // console.log('movieList', this.movieList);
  }

  // this.getMovies();

  logout() {

  }
}
