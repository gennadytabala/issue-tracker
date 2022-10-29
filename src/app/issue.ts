export interface Issue {
    issueNo: string;
    title: string;
    description: string;
    priority: 'low' | 'high';
    type: 'Feature' | 'Bug' | 'Documentation';
    completed?: Date;
}
