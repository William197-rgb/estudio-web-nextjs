// Next's static export writes segment-prefetch payloads as nested folders
// (rubros/x/__next.rubros/$d$slug/__PAGE__.txt), but the client requests the dot-joined name
// (rubros/x/__next.rubros.$d$slug.__PAGE__.txt). Static hosts can't map one to the other, so copy
// every nested payload to its flat name after the build.
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";
let copied = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name.startsWith("__next.")) flatten(full, dir);
    else walk(full);
  }
}

function flatten(segmentDir, parent) {
  for (const name of readdirSync(segmentDir)) {
    const full = join(segmentDir, name);
    if (statSync(full).isDirectory()) {
      flatten(full, parent);
    } else if (name.endsWith(".txt")) {
      const flat = relative(parent, full).split(sep).join(".");
      copyFileSync(full, join(parent, flat));
      copied++;
    }
  }
}

walk(OUT);
console.log(`flatten-segments: ${copied} files`);
