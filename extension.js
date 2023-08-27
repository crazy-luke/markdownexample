// const vscode = require('vscode');
const example = require('./example');

function activate(context) {
    // vscode.window.showInformationMessage('Congratulations, your extension "MarkdownExample" is now active!');
    context.subscriptions.push(example);

}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}