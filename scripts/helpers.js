import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

import dotenv from "dotenv";
dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
  console.error("Wallet private key missing")
  process.exit(1)
}

export const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.WALLET_PRIVATE_KEY,
    ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com") 
  ),
);

const appAddress = '0x66259bc3d41015B80fA3451398e6c894d7Ac451C'; 
export async function getApp() {
  const app = await sdk.getAppModule(appAddress);
  return app;
}
