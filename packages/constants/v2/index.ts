import packageJson from "../../../package.json" with { type: "json" };

const { name: SDK_NAME, version: SDK_VERSION } = packageJson;

export { SDK_NAME, SDK_VERSION };

const arr = new Uint8Array(16);
crypto.getRandomValues(arr);

const hash = Array.from(arr, (item) => item.toString(32).padStart(2, "0"))
  .join("")
  .substring(0, 32);

export const SESSION_KEY = `${hash}-session`;

export const TTL = 30 * 60 * 1000; // ms

export const LOCAL_KEY = `${hash}-local`;
