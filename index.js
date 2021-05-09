const msal = require("@azure/msal-node");

const msalConfig = {
    auth: {
        clientId: "4776a93e-1894-4c4c-a19f-124468341316",
        authority: "https://login.microsoftonline.com/falugbasgmail.onmicrosoft.com",
    }
};

const pca = new msal.PublicClientApplication(msalConfig);

// For testing, enter your username and password below.
// In production, replace this with a UI prompt instead.
const usernamePasswordRequest = {
    scopes: ["user.read"],
    username: "segz@falugbasgmail.onmicrosoft.com", // Add your username here
    password: "Mynickname.1", // Add your password here
};

pca.acquireTokenByUsernamePassword(usernamePasswordRequest).then((response) => {
    console.log("acquired token by password grant",response);
}).catch((error) => {
    console.log(error);
});



/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

// var msal = require("@azure/msal-node");
// const { promises: fs } = require("fs");

// /**
//  * Cache Plugin configuration
//  */
// const cachePath = "./data/cache.json"; // Replace this string with the path to your valid cache file.

// const beforeCacheAccess = async (cacheContext) => {
//     cacheContext.tokenCache.deserialize(await fs.readFile(cachePath, "utf-8"));
// };

// const afterCacheAccess = async (cacheContext) => {
//     if (cacheContext.cacheHasChanged) {
//         await fs.writeFile(cachePath, cacheContext.tokenCache.serialize());
//     }
// };

// const cachePlugin = {
//     beforeCacheAccess,
//     afterCacheAccess
// };

// const msalConfig = {
//     auth: {
//         clientId: "4776a93e-1894-4c4c-a19f-124468341316",
//         authority: "https://login.microsoftonline.com/falugbasgmail.onmicrosoft.com",
//     },
//     cache: {
//         cachePlugin
//     }
// };

// const pca = new msal.PublicClientApplication(msalConfig);
// const msalTokenCache = pca.getTokenCache();

// const tokenCalls = async () => {

//     async function getAccounts() {
//         return await msalTokenCache.getAllAccounts();
//     };

//     accounts = await getAccounts();

//     // Acquire Token Silently if an account is present
//     if (accounts.length > 0) {
//         const silentRequest = {
//             account: accounts[0], // Index must match the account that is trying to acquire token silently
//             scopes: ["user.read"],
//         };

//         pca.acquireTokenSilent(silentRequest).then((response) => {
//             console.log("\nSuccessful silent token acquisition");
//         }).catch((error) => {
//             console.log(error);
//         });
//     // fall back to username password if there is no account
//     } else {
//         const usernamePasswordRequest = {
//             scopes: ["user.read"],
//             username: "segz@falugbasgmail.onmicrosoft.com", // Add your username here
//             password: "Mynickname.1", // Add your password here
//         };

//         pca.acquireTokenByUsernamePassword(usernamePasswordRequest).then((response) => {
//             console.log("acquired token by password grant");
//         }).catch((error) => {
//             console.log(error);
//         });
//     }
// }

// tokenCalls();