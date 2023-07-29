import * as token from "@solana/spl-token"

const {
    Keypair,
    Transaction,
    SystemProgram,
    LAMPORTS_PER_SOL,
  } = require("@solana/web3.js");
  
// async function createNewMint(
//     connection: web3Connection,
//     payer: web3.Keypair,
//     mintAuthority: web3
// )

async function main() {}

main()
    .then(() => {
        console.log("Finished successfully")
        process.exit(0)
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
