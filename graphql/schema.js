import { buildSchema } from "graphql";
import * as path from "../utils/pathResolve.js";
import { readFileSync } from "fs";

const schemaString = readFileSync(path.resolve(["graphql", "schema.gql"]), {
  encoding: "utf-8",
});

export const schema = buildSchema(schemaString);
