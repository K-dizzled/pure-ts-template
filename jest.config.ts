/* eslint-disable @typescript-eslint/naming-convention */
import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "json"],
    testMatch: ["**/src/test/**/*.test.ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    extensionsToTreatAsEsm: [".ts"],
};

export default config;
