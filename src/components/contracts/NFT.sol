// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



contract NFT is ERC721URIStorage {

    uint256 COUNTER;

    constructor() ERC721("NFT Name", "NFT SYMBOL"){
    }

    struct NFT {
        string tokenURI;
        uint256 mintDate;
        uint256 attribute;
        uint256 id;
    }

    NFT[] public nfts;

    function getNFTs() public view returns (NFT[] memory) { 
        return nfts;
    }

    function mint(string memory _tokenURI) public {
        NFT memory newNft = NFT(_tokenURI, block.timestamp, 0, COUNTER);
        nfts.push(newNft);
        
        _mint(msg.sender, COUNTER);
        _setTokenURI(COUNTER, _tokenURI);
        COUNTER++;
    }

}