const inputRaw = await Bun.file("./data/input.pot").text();

const msgstrsTranslated: string[] = await Bun
  .file("./data/msgstr-translated.json")
  .json();

const replaced = msgstrsTranslated.reduce(
  (state, msgstr) => state.replace(/^msgstr ""$/m, `msgstr "${msgstr}"`),
  inputRaw,
);

await Bun.write("./data/output.po", replaced);
