# Lask for VS Code

[Lask](https://github.com/lask-task-runner/lask) language support for Visual Studio Code —
edit `.lask` task definitions with live type checking, hover info, and semantic highlighting
powered by the Lask language server.

## Features

- **Diagnostics**: syntax, name resolution, and type errors are reported as you type and on save.
- **Hover**: hover over a name to see its inferred type and documentation.
- **Semantic highlighting**: token colors are provided by the language server, not a static grammar.
- **Restart Language Server**: run `Lask: Restart Language Server` from the Command Palette if the
  server gets into a bad state (e.g. after changing the `lask` executable).

## Requirements

This extension talks to the `lask` command-line tool via `lask serve`; it does not bundle Lask
itself. Install the CLI first — see the
[installation instructions](https://github.com/lask-task-runner/lask#installation) (Homebrew or
manual binary download) — and make sure `lask` is on your `PATH`, or point the extension at it
explicitly (see Settings below).

## Getting Started

1. Install this extension and the `lask` CLI (see Requirements).
2. Open a folder containing a `main.lask` file, or open any `.lask` file directly.
3. Start editing — diagnostics and hover information appear automatically.

## Settings

| Setting | Description | Default |
| --- | --- | --- |
| `vscode-lask.executablePath` | Path to the `lask` executable. Leave empty to use `lask` from your `PATH`. | `""` |
| `vscode-lask.lask.inlayHints` | Enable inlay hints. | `true` |

## Commands

| Command | Description |
| --- | --- |
| `Lask: Restart Language Server` | Restarts the Lask language server for the current workspace. |

## Development

Build a distributable VS Code package (`.vsix`):

```bash
npm ci
npm run vscode:package
```

Generated package: `vscode-lask-<version>.vsix`
