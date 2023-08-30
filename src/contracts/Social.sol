// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.11;

contract Social {
    address public owner;
    uint256 private counter;

    //uint256 private postCount

    constructor() {
        counter = 0;
        owner = msg.sender;
    }

    struct Post {
        address payable author;
        uint256 id;
        string postTxt;
        string postImg;
        uint256 tipAmount;
    }

    event postCreated(
        address payable author,
        uint256 id,
        string postTxt,
        string postImg,
        uint256 tipAmount
    );

    mapping(uint256 => Post) posts;
    mapping(address => uint256) public profiles;

    function addPost(string memory postTxt, string memory postImg) public {
        //require(msg.value == (0.01 ether), "Please submit 0.01 Matic");
        Post storage newPost = posts[counter];
        newPost.postTxt = postTxt;
        newPost.postImg = postImg;
        newPost.author = payable(msg.sender);
        newPost.id = counter;

        emit postCreated(payable(msg.sender), counter, postTxt, postImg, 0);

        counter++;

        // payable(owner).transfer(msg.value);
    }

    function getAllPost() external view returns (Post[] memory _posts) {
        _posts = new Post[](counter);
        for (uint256 i = 0; i < _posts.length; i++) {
            _posts[i] = posts[i];
        }
    }

    function getMyPost() external view returns (Post[] memory _posts) {
        uint cnt = 0;
        for (uint256 i = 0; i < counter; i++) {
            if (msg.sender == posts[i].author) {
                cnt += 1;
            }
        }

        _posts = new Post[](cnt);
        uint idx = 0;
        for (uint256 i = 0; i < counter; i++) {
            if (msg.sender == posts[i].author) {
                _posts[idx++] = posts[i];
            }
        }
    }

    event PostTipped(
        uint256 id,
        string hash,
        uint256 tipAmount,
        address payable author
    );

    function buyMeCoffee(uint256 _id) public payable {
        Post memory _post = posts[_id];
        // address payable _author = _post.author;
        require(_post.author != msg.sender, "Cannot pay your own post");
        _post.author.transfer(msg.value);
        _post.tipAmount += 1;
        //address(_author).transfer(msg.value);
        posts[_id] = _post;
        emit PostTipped(_id, _post.postTxt, _post.tipAmount, _post.author);
    }

    // function membership() public payable
}
