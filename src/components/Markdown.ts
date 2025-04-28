import * as vscode from 'vscode';

export class Markdown {
    private description: string;
    private example: string;

    constructor(description: string, example: string) {
        this.description = description;
        this.example = example;
    }

    public toMarkdown(): vscode.MarkdownString {
        const markdownString = new vscode.MarkdownString();

        markdownString.appendMarkdown(`**Description**: ${this.description}\n\n`);

        markdownString.appendMarkdown(`**Usage example**:\n`);
        markdownString.appendCodeblock(this.example, 'twig');
        
        return markdownString;
    }
}
