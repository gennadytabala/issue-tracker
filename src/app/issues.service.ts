import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issues: Issue[] = issues;

  constructor() { }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = uuidv4();
    this.issues.push(issue);
  }

}