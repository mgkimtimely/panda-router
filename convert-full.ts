// scripts/convert-full.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePath = path.resolve(__dirname, "design-tokens.tokens.json");
const colorsDestPath = path.resolve(__dirname, "tokens/colors.json");
const fontDestPath = path.resolve(__dirname, "tokens/fontStyles.json");

const json = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));

/** Convert colors **/
const colors: Record<string, { value: string }> = {};
const colorData = json?.color || {};

for (const [group, entries] of Object.entries(colorData)) {
  for (const [name, def] of Object.entries(entries as any)) {
    if (typeof def === "object" && def.value) {
      const key = `${group}-${name}`.replace(/\s+/g, "-").toLowerCase();
      const value = def.value.replace(/ff$/i, "");
      colors[key] = { value };
    }
  }
}

fs.mkdirSync(path.dirname(colorsDestPath), { recursive: true });
fs.writeFileSync(colorsDestPath, JSON.stringify({ colors }, null, 2));

/** Convert font styles **/
const fontStyles: Record<string, any> = {};
const fontData = json?.font || json?.typography || {};

const flattenFonts = (obj: any, prefix = "") => {
  for (const [key, val] of Object.entries(obj)) {
    if (val?.value && typeof val.value === "object") {
      const flatKey = `${prefix}${key}`.replace(/\./g, "-");
      fontStyles[flatKey] = val.value;
    } else if (typeof val === "object") {
      flattenFonts(val, `${prefix}${key}-`);
    }
  }
};

flattenFonts(fontData);

fs.writeFileSync(fontDestPath, JSON.stringify({ fontStyles }, null, 2));

console.log(
  "✅ Design tokens exported to tokens/colors.json & tokens/fontStyles.json"
);
