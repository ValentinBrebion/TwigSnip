import * as vscode from 'vscode';
import * as path from 'path';
import * as pkg from '../../package.json';

export class PreviewManager {
    private static instance: PreviewManager;
    private panel: vscode.WebviewPanel | undefined;

    private constructor() {}

    public static getInstance(): PreviewManager {
        if (!PreviewManager.instance) {
            PreviewManager.instance = new PreviewManager();
        }
        return PreviewManager.instance;
    }

    public showPreview(uri: vscode.Uri) {
        const document = vscode.workspace.textDocuments.find(doc => doc.uri.toString() === uri.toString());
        if (!document) {
            vscode.window.showErrorMessage('Impossible d\'ouvrir le document');
            return;
        }

        const title = `Aperçu: ${path.basename(document.fileName)}`;
        
        if (this.panel) {
            this.panel.reveal();
            this.updateContent(document);
            return;
        }

        this.panel = vscode.window.createWebviewPanel(
            'twigPreview',
            title,
            vscode.ViewColumn.Beside,
            {
                enableScripts: true,
                retainContextWhenHidden: true
            }
        );

        this.panel.onDidDispose(
            () => {
                this.panel = undefined;
            },
            null
        );

        this.updateContent(document);

        const changeDocumentSubscription = vscode.workspace.onDidChangeTextDocument(e => {
            if (e.document.uri.toString() === document.uri.toString()) {
                this.updateContent(document);
            }
        });

        this.panel.onDidDispose(() => {
            changeDocumentSubscription.dispose();
        });
    }

    private updateContent(document: vscode.TextDocument) {
        if (!this.panel) {
            return;
        }

        const content = document.getText();
        this.panel.webview.html = this.getWebviewContent(content);
    }

    private escapeHtml(unsafe: string): string {
        return unsafe.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, (match) => {
        return match
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    });
    }

    private getWebviewContent(content: string): string {
        const encodedContent = this.escapeHtml(content);

        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Aperçu Twig</title>
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                        margin: 0;
                        padding: 20px;
                        background-color: white;
                    }
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    .preview-content {
                        border: 1px solid #e1e4e8;
                        border-radius: 6px;
                        padding: 20px;
                        min-height: 200px;
                        background-color: white;
                        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    }
                    .status-bar {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 10px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>Aperçu du rendu</h2>
                    <div id="preview-container" class="preview-content">
                        ${this.escapeHtml(encodedContent)}
                    </div>
                    <p><small>La prévisualisation se met à jour automatiquement lors de la modification du fichier.</small></p>
                    <div class="status-bar">
                        <span>TwigSnip v${pkg.version}</span>
                        <span id="status">Prêt</span>
                    </div>
                </div>

            </body>
            </html>
        `;
    }
}
