import fs from 'fs';
import path from 'path';

interface DirectoryNode {
    name: string;
    children?: DirectoryNode[];
}

function buildDirectoryTree(dirPath: string): DirectoryNode {
    const name = path.basename(dirPath);
    const node: DirectoryNode = { name, children: [] };

    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            node.children?.push(buildDirectoryTree(filePath));
        }
    }

    return node;
}

function main(rootPath: string) {
    const rootNode = buildDirectoryTree(rootPath);
    const jsonData = JSON.stringify(rootNode);
    fs.writeFileSync('static/tree.json', jsonData);
}

// Usage example
main('src/routes');
