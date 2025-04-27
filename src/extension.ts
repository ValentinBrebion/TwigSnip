import * as vscode from 'vscode';
import { controlsCompletions } from './completions/controls';
import { filtersCompletions } from './completions/filters';
import { basicCompletions } from './completions/basic';
import { dateCompletions } from './completions/dateFilters';

export function activate(context: vscode.ExtensionContext) {
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
                item.detail = keyword.detail;
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