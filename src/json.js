
const code = `{
  "name": "react-monacoeditor",
  "version": "1.0.0",
  "description": "Monaco Editor component for React.",
  "private": true,
  "scripts": {
    "release": "babel --plugins transform-runtime src --out-dir lib --copy-files",
    "start": "kkt start",
    "build": "kkt build"
  },
  "keywords": [
    "react-monacoeditor",
    "monacoeditor",
    "monaco-editor",
    "monaco",
    "editor",
    "react",
    "vscode"
  ],
  "author": "kenny wong <wowohoo@qq.com>",
  "license": "MIT",
  "dependencies": {
    "monaco-editor": "^0.13.1",
    "prop-types": "^15.6.2",
    "react": "^16.4.0",
    "react-dom": "^16.4.0"
  },
  "devDependencies": {
    "classnames": "^2.2.6",
    "kkt": "1.9.x",
    "monaco-editor-webpack-plugin": "^1.4.0",
    "react-markdown": "^3.3.4"
  }
}
`;

export default code;
