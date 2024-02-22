const inputRaw = await Bun.file("./data/input.pot").text();
const msgids = [...inputRaw.matchAll(/^msgid "(.*)"$/mg)].map(([_, m]) => m);
await Bun.write("./data/msgids.json", JSON.stringify(msgids, undefined, 2));

const msgstrsTranslated: string[] = await Bun
  .file("./data/msgstr-translated.json")
  .json();

// console.log({ msgstrsTranslated });

const replaced = msgstrsTranslated.reduce(
  (state, msgstr) => state.replace(/^msgstr ""$/m, `msgstr "${msgstr}"`),
  inputRaw,
);

// console.log({ replaced });

await Bun.write("./data/output.po", replaced);