
centos8 2 cpu 8 ram

sudo passwd
su

curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
// restart shell
rustup --version
rustc --version
cargo --version

sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
export PATH="/root/.local/share/solana/install/active_release/bin:$PATH"
solana --version

yum install git -y
yum install nodejs -y
node --version
npm --version
npm install -g mocha
npm install -g yarn

yum install -y gcc
yum install -y pkgconfig
yum install -y openssl-devel
cargo install --git https://github.com/project-serum/anchor anchor-cli --locked
anchor --version
cargo install spl-token-cli

solana-keygen new --force
solana address
solana-keygen pubkey
solana balance --url devnet
solana airdrop 2 DFcF8qFRrZ9hDK9ouMwsEYtJ8cbp4T5uEyT6rPP2XGnd --url devnet

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
