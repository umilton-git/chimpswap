pragma solidity >=0.5.0;

interface IChimpswapV2Callee {
    function ChimpswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
