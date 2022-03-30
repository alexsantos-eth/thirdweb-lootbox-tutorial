import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xD50102A56664ab8d8A1ccB43656eb3D0c0B9AfE6';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}