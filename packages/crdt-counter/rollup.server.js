import path from "path";
import esbuild from "rollup-plugin-esbuild";

process.env.NODE_ENV === "production";
export default async () => {
  return {
    input: "server/index.ts",
    output: {
      file: "./build/server.js",
      format: "cjs",
    },
    external: [/.*/],
    plugins: [
      esbuild({
        exclude: [/node_modules/],
        target: "esnext",
        minify: true,
        charset: "utf8",
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
  };
};
