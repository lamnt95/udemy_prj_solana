const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js")

// const wallet = new Keypair()

// const publicKey = new PublicKey(wallet._keypair.publicKey)
// const secretKey = wallet._keypair.secretKey

const pk = [136, 124, 115, 160, 39, 138, 110, 96, 215, 164, 39, 0, 27, 221, 249, 192, 184, 112, 210, 221, 194, 22, 4, 227, 217, 123, 92, 148, 165, 182, 164, 53];
const sk = [115, 194, 143, 144, 198, 12, 84, 80, 45, 185, 27, 107, 197, 62, 225, 130, 168, 169, 106, 202, 244, 181, 117, 33, 43, 23, 2, 20, 68, 190, 5, 21, 136, 124, 115, 160, 39, 138, 110, 96, 215, 164, 39, 0, 27, 221, 249, 192, 184, 112, 210, 221, 194, 22, 4, 227, 217, 123, 92, 148, 165, 182, 164, 53];
const publicKey = new PublicKey(pk)
const secretKey = sk

const getWalletBalance = async (key) => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const walletBalance = await connection.getBalance(key)
        console.log(`Wallet balance is ${walletBalance}`)
    } catch (err) {
        console.error(err)
    }
}
const airDropSol = async (key,val) => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const fromAirDropSignature = await connection.requestAirdrop(key, val * LAMPORTS_PER_SOL)
        const latestBlockHash = await connection.getLatestBlockhash();
        await connection.confirmTransaction({
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature: fromAirDropSignature,
        });
    } catch (err) {
        console.log(err)
    }
}
const main = async () => {
    await getWalletBalance(publicKey)
    await airDropSol(publicKey, 2)
    await getWalletBalance(publicKey)
}
main()