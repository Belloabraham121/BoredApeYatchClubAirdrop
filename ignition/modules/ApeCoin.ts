import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ApeCoinModule = buildModule("ApeCoinModule", (m) => {


    const ApeCoin = m.contract("ApeCoin");

    return { ApeCoin };
});

export default ApeCoinModule;

// ApeCoinModule#ApeCoin - 0x09Df03cd920475875C6A62369512622b778e61D4