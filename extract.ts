const inputRaw = await Bun.file("./data/input.pot").text();
const msgids = [...inputRaw.matchAll(/^msgid "(.*)"$/mg)].map(([_, m]) => m);
await Bun.write("./data/msgids.json", JSON.stringify(msgids, undefined, 2));