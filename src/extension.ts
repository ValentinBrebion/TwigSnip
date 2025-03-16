import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Enregistrement du provider d'autocomplétion
    const provider = vscode.languages.registerCompletionItemProvider('twig', {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const twigKeywords = [
                // Contrôles
                { label: 'if', detail: 'Condition if', insertText: '{% if (${1:condition}) %}\n\t$0\n{% endif %}' },
                { label: 'for', detail: 'loop for', insertText: 'for ${1:item} in ${2:items} %}\n\t$0\n{% endfor %}' },
                { label: 'set', detail: 'Define a variable', insertText: 'set ${1:variable} = ${2:value}' },
                
                // Filtres communs
                { label: '|upper', detail: 'Convert to uppercase', insertText: '|upper' },
                { label: '|lower', detail: 'Convert to lowercase', insertText: '|lower' },
                { label: '|date', detail: 'Format a date', insertText: '|date(${1:"Y-m-d"})' },
                { label: "|join",detail: "Join an array into a string with an empty separator by default",insertText: "|join('${1:}')"
                  },
                
                // Tags de base
                { label: 'extends', detail: 'Extend a template', insertText: 'extends "${1:template.html.twig}"' },
                { label: 'include', detail: 'Include un template', insertText: 'include "${1:template.html.twig}"' },
                { label: 'block', detail: 'Define a block', insertText: 'block ${1:name}\n\t$0\n{% endblock %}' },
            ];

            return twigKeywords.map(keyword => {
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