# Uniswap Interface

Changes in following files:

1.  /src/constants/index.ts (Router contract address,added sepolia network)
2.  src/connectors/index.ts (chainId added at injected)
3.  src/constants/multicall/index.ts (added multicall contract address)
4.  src/components/Header/index.tsx (added sepolia network at NETWORK_LABELS)
5.  src/constants/v1/index.ts (sepolia network added with factory' address)
6.  src/state/lists/hooks.ts (sepolia network added at EMPTY_LIST)
7.  src/utils/index.ts (sepolia network added with chainId at ETHERSCAN_PREFIXES)

Contract addresses:
Multicall: 0xE89CB2cB05EC943824Eb78433dE6b171e8f4A835
router02: 0x16Fd76b75bE7c342d9936fC77E5131dAB6E15631
factory: 0x0F1D652FFE4FE6b20928c19965cFB8Cfb56cfa4D

WETH: 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9

LAMP on SEPOLIA: 0x08cCBE8868A69b3D28d4A24d45E3F678235568d6
PIX on SEPOLIA: 0x5620E871C6c52bAC4AF0cE4F436c9Bf94eA35338

InitCode: 0x5025692f907ef5795d194e2c52bb8191d64d0c5fe4967925a601c6f34ae262b6
