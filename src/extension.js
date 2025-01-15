import { commands, window } from "vscode";
import { LanguageClient } from "vscode-languageclient/node";

let client; // : LanguageClient | undefined;

async function startLanguageClient(context) {
	try {
    const serverOptions = {
			command: "lask",
      args: ["serve"],
    };
		const clientOptions = {
			documentSelector: [
				{
					scheme: "file",
					language: "lask",
				},
			],
		};
		client = new LanguageClient("Lask Language Server", serverOptions, clientOptions);
		await client.start();
	} catch (e) {
		window.showErrorMessage("Failed to start Lask Language Server.");
		window.showErrorMessage(`${e}`);
	}
}

async function restartLanguageClient() {
	try {
		if (client === undefined) {
			throw new Error();
		}
		await client.restart();
	} catch (e) {
		window.showErrorMessage("Failed to restart Lask Language Server.");
		window.showErrorMessage(`${e}`);
	}
}

export async function activate(context) {
	context.subscriptions.push(
		commands.registerCommand("lask.restartLanguageServer", () => restartLanguageClient())
	);
	await startLanguageClient(context);
}

export function deactivate() {
	if (client) {
		return client.stop();
	}
}
