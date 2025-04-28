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
const controls_1 = require("./completions/controls");
const filters_1 = require("./completions/filters");
const basic_1 = require("./completions/basic");
const dateFilters_1 = require("./completions/dateFilters");
const Markdown_1 = require("./components/Markdown");
function activate(context) {
    const config = vscode.workspace.getConfiguration();
    const includeLanguages = config.get('emmet.includeLanguages') || {};
    if (!includeLanguages['twig']) {
        includeLanguages['twig'] = 'html';
        config.update('emmet.includeLanguages', includeLanguages, vscode.ConfigurationTarget.Global);
    }
    const provider = vscode.languages.registerCompletionItemProvider('twig', {
        provideCompletionItems( /*document: vscode.TextDocument, position: vscode.Position*/) {
            const allCompletions = [
                ...controls_1.controlsCompletions,
                ...filters_1.filtersCompletions,
                ...basic_1.basicCompletions,
                ...dateFilters_1.dateCompletions
            ];
            return allCompletions.map(keyword => {
                const item = new vscode.CompletionItem(keyword.label);
                const markdown = new Markdown_1.Markdown(keyword.detail, keyword.example);
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
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map