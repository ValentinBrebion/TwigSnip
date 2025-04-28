import * as vscode from 'vscode';
import { controlsCompletions } from './completions/controls';
import { filtersCompletions } from './completions/filters';
import { basicCompletions } from './completions/basic';
import { dateCompletions } from './completions/dateFilters';
import { Markdown } from './components/Markdown';

export function activate(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration();
    const includeLanguages = config.get<{ [key: string]: string }>('emmet.includeLanguages') || {};

    if (!includeLanguages['twig']) {
        includeLanguages['twig'] = 'html';
        config.update('emmet.includeLanguages', includeLanguages, vscode.ConfigurationTarget.Global);
    }

    const provider = vscode.languages.registerCompletionItemProvider('twig', {
        provideCompletionItems(/*document: vscode.TextDocument, position: vscode.Position*/) {
            const allCompletions = [
                ...controlsCompletions,
                ...filtersCompletions,
                ...basicCompletions,
                ...dateCompletions
            ];

            return allCompletions.map(keyword => {
                const item = new vscode.CompletionItem(keyword.label);

                const markdown = new Markdown(keyword.detail, keyword.example);
                item.documentation = markdown.toMarkdown();
                
                if (keyword.insertText) {
                    item.insertText = new vscode.SnippetString(keyword.insertText);
                }

                return item;
            });
        }
    });

    context.subscriptions.push(provider);
}

export function deactivate() {}
