import { Issue } from "./raw/Issue";
import { Label } from "./raw/Label";
import { Reactions } from "./raw/Reactions";
import { Author } from "./Author";
export class Problem {
    number: number;
    htmlUrl: string;
    title: string;
    state: "open" | "closed";
    comments: number;
    createdAt: string;
    labels: Label;
    reactions: Reactions;
    author: Author;

    constructor(issue: Issue) {
        this.number = issue.number;
        this.htmlUrl = issue.html_url;
        this.title = issue.title;
        this.state = issue.state;
        this.comments = issue.comments;
        this.createdAt = issue.created_at;
        this.labels = issue.labels;
        this.reactions = issue.reactions;
    }
    get points(): number {
        return this.reactions["+1"] - this.reactions["-1"];
    }
    
    
}