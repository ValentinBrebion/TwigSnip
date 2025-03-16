import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Enregistrement du provider d'autocomplétion
    const provider = vscode.languages.registerCompletionItemProvider('twig', {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const twigKeywords = [
                // Contrôles
                { label: 'if', detail: 'Condition if', insertText: '{% if (${1:condition}) %}\n\t$0\n{% endif %}' },
                { label: 'for', detail: 'Boucle for', insertText: 'for ${1:item} in ${2:items} %}\n\t$0\n{% endfor %}' },
                { label: 'set', detail: 'Définir une variable', insertText: 'set ${1:variable} = ${2:value}' },
                
                // Filtres communs
                { label: '|upper', detail: 'Convertir en majuscules', insertText: '|upper' },
                { label: '|lower', detail: 'Convertir en minuscules', insertText: '|lower' },
                { label: '|date', detail: 'Formater une date', insertText: '|date(${1:"Y-m-d"})' },
                
                // Tags de base
                { label: 'extends', detail: 'Étendre un template', insertText: 'extends "${1:template.html.twig}"' },
                { label: 'include', detail: 'Inclure un template', insertText: 'include "${1:template.html.twig}"' },
                { label: 'block', detail: 'Définir un bloc', insertText: 'block ${1:name}\n\t$0\n{% endblock %}' },
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