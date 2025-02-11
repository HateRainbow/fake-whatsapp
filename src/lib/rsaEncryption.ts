import crypto from "crypto";

type rsaKeys = { publicKey: string; privateKey: string };

const { publicKey, privateKey }: rsaKeys = crypto.generateKeyPairSync("rsa", {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

// encrypt with public rsa key the AES key to send to the other user
export function publicKeyEncrypt(msg: string): Buffer<ArrayBufferLike> {
  return crypto.publicEncrypt(publicKey, Buffer.from(msg));
}

// decrypt AES key with private key
export function privateKeyDecrypt(
  encryptMsg: Buffer<ArrayBufferLike>
): Buffer<ArrayBufferLike> {
  return crypto.privateDecrypt(privateKey, encryptMsg);
}

function arrayBufferToBase64(buffer: Buffer<ArrayBufferLike>): string {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
}
