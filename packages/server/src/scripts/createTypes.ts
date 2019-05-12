import { generateNamespace } from "@gql2ts/from-schema";
import * as fs from "fs";
import * as path from "path";

import { genSchema } from "../utils/genSchema";

const typescriptTypes = generateNamespace("GQL", genSchema());
console.log("before path");
fs.writeFile(
  path.join(__dirname, "../types/schema.d.ts"),
  typescriptTypes,
  err => {
    console.log(err);
  }
);
