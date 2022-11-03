import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  issueForm: FormGroup | undefined;

  @Input() issue: Issue | null = null;
  @Output() formClose = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private issuesService:IssuesService) { }

  ngOnInit(): void {

    this.issueForm = this.formBuilder.group({
      title: [this.issue?.title, [Validators.required, Validators.pattern(/^\w{1,}/)]],
      description: [this.issue?.description],
      priority: [this.issue?.priority, Validators.required]
    })

  }

  saveIssue() {

    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }

    if(this.issueForm && this.issue) {
      this.issuesService.saveIssue({
        ...this.issueForm.value,
        issueNo: this.issue.issueNo,
        type: this.issue.type
      });
      this.issue = null;
      this.formClose.emit();    
    }
  }
}
