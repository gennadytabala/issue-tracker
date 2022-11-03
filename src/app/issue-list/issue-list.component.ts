import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  
  issues: Issue[] = [];
  showReportIssue = false;
  showEditIssue = false;
  selectedIssue: Issue | null = null;

  constructor(private issuesSerice: IssuesService) { }

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issuesSerice.getPendingIssues();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  onCloseEdit() {
    this.showEditIssue = false;
    this.selectedIssue = null;
    this.getIssues();
  }

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issuesSerice.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }
}
