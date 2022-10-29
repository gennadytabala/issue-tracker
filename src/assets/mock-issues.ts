import { Issue } from 'src/app/issue';

export const issues: Issue[] = [
  {
    issueNo: 'a932a771-3294-4cf8-ad7f-c5b6d619d143',
    title:  'Add email validation in registration form',
    description: 'Validate the email entered in the user registration form',
    priority: 'high',
    type: 'Feature'
  },
  {
    issueNo: '93d36983-745a-4bb0-a8f6-2e4c2f8e9ab6',
    title:  'Display the adress details of a customer',
    description: 'Add a column to display the details of the customer address in the customer list',
    priority: 'low',
    type: 'Feature'
  },
  {
    issueNo: 'eb4cc817-0f5f-46f5-b27b-1247ab912d2e',
    title:  'Export to CSV is not working',
    description: 'The export process of a report into CSV format throws an error',
    priority: 'high',
    type: 'Bug'
  },
  {
    issueNo: 'b2835705-7d7a-4fad-8c3e-2d86cca7794e',
    title:  'Locale settings per user',
    description: 'Add settings configure the locale of the current user',
    priority: 'low',
    type: 'Feature'
  },
  {
    issueNo: '2d6f9a2c-d0c4-462b-b3c1-ecaf77925995',
    title:  'Add new customer tutorial',
    description: 'Create a tutorial on how to add a new customer into the application',
    priority: 'high',
    type: 'Documentation'
  },
];
