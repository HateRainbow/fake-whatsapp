import CryptoJS from "crypto-js";

function encrypt(plaintext: string, secret: string) {
  var key = CryptoJS.enc.Utf8.parse(secret);
  let iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4));
  console.log("IV : " + CryptoJS.enc.Base64.stringify(iv));

  var cipherText = CryptoJS.AES.encrypt(plaintext, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return cipherText.toString();
}

function decrypt(cipherText: string, secret: string, iv: string): string {
  const iv1 = CryptoJS.enc.Base64.parse(iv);
  const key = CryptoJS.enc.Utf8.parse(secret);
  const cipherBytes = CryptoJS.enc.Base64.parse(cipherText);

  const decrypted = CryptoJS.AES.decrypt(cipherText, key, {
    iv: iv1,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
