import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "github-productivity-tracker" is now active!');

    let disposable = vscode.commands.registerCommand('githubProductivityTracker.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from github-productivity-tracker!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
