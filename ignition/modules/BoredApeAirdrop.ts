import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BoredApeAirdropModule = buildModule("BoredApeAirdropModule", (m) => {


     const token = "0x09Df03cd920475875C6A62369512622b778e61D4"

     const merkleRoot = "0x29994ecbf105ca527e5dc5dfd526e0945ee4ed34fc79b48b3cb5fd1961889c48"

    const BoredApeAirdrop = m.contract("BoredApeAirdrop", [token, merkleRoot]);

    return { BoredApeAirdrop };
});

export default BoredApeAirdropModule;
