import { fontSplit } from "cn-font-split";

interface Options {
  fontWeight: number;
  src: string;
  dist: string;
}

const run = async (options: Options) => {
  await fontSplit({
    FontPath: `./HarmonyOS_Sans_SC/src/${options.src}`,
    destFold: `./HarmonyOS_Sans_SC/dist/${options.dist}`,
    chunkSize: 256 * 1024,
    testHTML: false,
    reporter: false,
    css: {
      fontFamily: "HarmonyOS Sans",
      fontWeight: options.fontWeight,
    },
    renameOutputFont: "[index][ext]",
  });
};

await run({
  fontWeight: 100,
  src: "HarmonyOS_Sans_SC_Thin.woff2",
  dist: "Thin",
});

await run({
  fontWeight: 300,
  src: "HarmonyOS_Sans_SC_Light.woff2",
  dist: "Light",
});

await run({
  fontWeight: 400,
  src: "HarmonyOS_Sans_SC_Regular.woff2",
  dist: "Regular",
});

await run({
  fontWeight: 500,
  src: "HarmonyOS_Sans_SC_Medium.woff2",
  dist: "Medium",
});

await run({
  fontWeight: 700,
  src: "HarmonyOS_Sans_SC_Bold.woff2",
  dist: "Bold",
});

await run({
  fontWeight: 900,
  src: "HarmonyOS_Sans_SC_Black.woff2",
  dist: "Black",
});
