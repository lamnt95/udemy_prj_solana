ubuntu 2 cpu 8 ram
user hocitviec not root

curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
// restart shell
rustup --version
rustc --version
cargo --version

sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
export PATH="/home/hocitviec/.local/share/solana/install/active_release/bin:$PATH"
solana --version

sudo apt-get update && sudo apt-get upgrade && sudo apt-get install -y pkg-config build-essential libudev-dev libssl-dev
cargo install --git https://github.com/project-serum/anchor anchor-cli --locked
anchor --version

cargo install spl-token-cli

solana-keygen new 

Bk2xQ1acTukgyZKEjrkYfLc2YiRCWQ92pHAHe1niH8UT
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
letter vintage track endorse alter conduct half tackle success exhaust opera timber

solana address
solana-keygen pubkey
solana balance --url devnet
solana airdrop 2 Bk2xQ1acTukgyZKEjrkYfLc2YiRCWQ92pHAHe1niH8UT --url devnet

sudo apt update
sudo apt upgrade

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install gcc g++ make
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install -y yarn

sudo npm i -g mocha

rustup --version
rustc --version
cargo --version
solana --version
node --version
npm --version
anchor --version

anchor init myepicproject --javascript
cd myepicproject
anchor test