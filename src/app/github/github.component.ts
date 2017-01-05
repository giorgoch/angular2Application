import { Component, OnInit } from '@angular/core';
import { GitHubService } from "../services/github.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

user:any;
  constructor(private githubService :GitHubService) {
    this.githubService.getUser().subscribe(user => {
      this.user=user;
      console.log(this.user)
    });
   }

  ngOnInit() {
  }

}
