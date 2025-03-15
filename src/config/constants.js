import path, { dirname } from "path";
import { fileURLToPath } from "url";

const configFile = fileURLToPath(import.meta.url);

export const PORT = 4000;

export const ROOT_DIR = dirname(configFile).replace("/config", "");
export const DATA_DIR = path.join(ROOT_DIR, "data");

export const QUOTES_PATH = path.join(DATA_DIR, "quotes.json");
