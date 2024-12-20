import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Activating github-productivity-tracker extension...');
    
    let disposable = vscode.commands.registerCommand('githubProductivityTracker.helloWorld', () => {
        console.log('Executing Hello World command...');
        vscode.window.showInformationMessage('Hello World from github-productivity-tracker!');
    });

    context.subscriptions.push(disposable);
    console.log('Command registered: githubProductivityTracker.helloWorld');
}

export function deactivate() {
    console.log('Deactivating github-productivity-tracker extension...');
}
