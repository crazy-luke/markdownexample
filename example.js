const vscode = require('vscode');
const path = require('path');

vscode.commands.registerCommand('markdown.example', function() {
    console.log(path.join(__dirname, 'example.md'));
    vscode.workspace.openTextDocument(path.join(__dirname, 'example.md')).then(doc => {
        vscode.window.showTextDocument(doc);
    });
});