var fs = require("fs");

deleteFolderRecursive = (folderName, path) => {
  const root = process.cwd();
  const directory = path?.includes(root) ? path : root;
  if (fs.existsSync(directory)) {
    files = fs.readdirSync(directory);
    files.forEach((file) => {
      const curPath = directory + "/" + file;
      if (curPath.endsWith("/" + folderName)) {
        fs.rmdirSync(curPath, { recursive: true, force: true });
        console.info("removendo: " + curPath);
      } else {
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteFolderRecursive(folderName, curPath);
        }
      }
    });
  }
};

deleteFolderRecursive("node_modules");
deleteFolderRecursive("dist");
deleteFolderRecursive("out");
deleteFolderRecursive(".next");
