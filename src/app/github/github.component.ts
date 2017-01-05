import { Component, OnInit } from '@angular/core';
import { GitHubService } from "../services/github.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user: any;
  repos: any;
  username: any;


  constructor(private githubService: GitHubService) {

    this.githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user)
    });

    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  search() {
    this.githubService.updateUsername(this.username);

      this.githubService.getUser().subscribe(user => {
      this.user = user;
      
    });
    
    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });

  }
  ngOnInit() {
  }

}
