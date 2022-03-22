import { ethers } from 'ethers';
import { Configuration } from '../tomb-finance/config';
import { web3ProviderFrom } from '../tomb-finance/ether-utils';

export function getDefaultProvider(config: Configuration): ethers.providers.Web3Provider {
  return new ethers.providers.Web3Provider(web3ProviderFrom(config.defaultProvider), config.chainId);
}
