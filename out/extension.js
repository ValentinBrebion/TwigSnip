"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
function activate(context) {
    // Enregistrement du provider d'autocomplétion
    const provider = vscode.languages.registerCompletionItemProvider('twig', {
        provideCompletionItems(document, position) {
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
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map