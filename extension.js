
const vscode = require('vscode');

const gitSCM = vscode.scm.createSourceControl('git', "Git");

var exec = require('child_process').exec;

function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.gitAdd', () => {
        console.log(`git add ${vscode.window.activeTextEditor.document.uri.fsPath}`);
        exec(`git add ${vscode.window.activeTextEditor.document.uri.fsPath}`, { cwd: vscode.workspace.rootPath }, function (err, stdout, stderr) {
            if (err) {
                console.log('error:' + stderr);
            }
        });
    }));

    context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello', function () {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    }));

    context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.testEditorCommand', (textEditor, edit) => {
        console.log('您正在执行编辑器命令！');
        console.log(textEditor, edit);
    }));
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;