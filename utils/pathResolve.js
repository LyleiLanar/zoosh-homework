import path from "path";
const __dirname = path.resolve();

export const resolve = (paths) => {
  return path.join(__dirname, ...paths);
};
