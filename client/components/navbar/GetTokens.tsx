import { useContext } from 'react';
import { Web3Context } from '../Web3Context';

const GetTokens = () => {
	const { contract, oneEther } = useContext(Web3Context);

	return (
		<div>
			<h3>Token Faucet</h3>
			<button
				className="btn bg-green-500 hover:bg-green-600"
				onClick={async () => await contract.getTokens(oneEther.mul('3'))}
			>
				Get 3 FLIP
			</button>
		</div>
	);
};

export default GetTokens;
