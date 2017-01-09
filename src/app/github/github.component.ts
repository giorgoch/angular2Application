import { Component, OnInit } from '@angular/core';
import { GitHubService } from "../services/github.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
 
})
export class GithubComponent implements OnInit {

  user: any;
  repos: any;
  username: any;


  constructor(private githubService: GitHubService) {

    this.user=false;

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
