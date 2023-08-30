const { time, loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("Social Contract", function () {
  async function deploySocialContractFixture() {
    const Social = await ethers.getContractFactory("Social");
    const social = await Social.deploy();
    //await social.deployed();

    return { social };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { social, owner } = await loadFixture(deploySocialContractFixture);

      expect(await social.owner()).to.equal(owner.address);
    });

    it("Should have a counter of 0", async function () {
      const { social } = await loadFixture(deploySocialContractFixture);

      expect(await social.counter()).to.equal(0);
    });
  });

  describe("Post Creation", function () {
    it("Should allow adding a post", async function () {
      const { social, owner } = await loadFixture(deploySocialContractFixture);
      const postTxt = "Hello, world!";
      const postImg = "image-hash";

      await social.addPost(postTxt, postImg);

      const post = await social.posts(0);

      expect(post.author).to.equal(owner.address);
      expect(post.id).to.equal(0);
      expect(post.postTxt).to.equal(postTxt);
      expect(post.postImg).to.equal(postImg);
      expect(post.tipAmount).to.equal(0);
    });

    it("Should emit a postCreated event", async function () {
      const { social, owner } = await loadFixture(deploySocialContractFixture);
      const postTxt = "Hello, world!";
      const postImg = "image-hash";

      await expect(social.addPost(postTxt, postImg))
        .to.emit(social, "postCreated")
        .withArgs(owner.address, 0, postTxt, postImg, 0);
    });
  });

  describe("Tip a Post", function () {
    it("Should allow tipping a post", async function () {
      const { social, owner } = await loadFixture(deploySocialContractFixture);
      const postId = 0;
      const tipAmount = ethers.utils.parseEther("0.01");

      await social.connect(owner).addPost("Test Post", "test-image-hash");
      const initialBalance = await ethers.provider.getBalance(owner.address);

      await social.connect(owner).buyMeCoffee(postId, { value: tipAmount });

      const post = await social.posts(postId);
      const newBalance = await ethers.provider.getBalance(owner.address);

      expect(post.tipAmount).to.equal(tipAmount);
      expect(newBalance.sub(initialBalance)).to.be.gt(0);
    });

    it("Should emit a PostTipped event", async function () {
      const { social, owner } = await loadFixture(deploySocialContractFixture);
      const postId = 0;

      await social.connect(owner).addPost("Test Post", "test-image-hash");
      await time.increase(3600); // Increase time by an hour

      await expect(social.connect(owner).buyMeCoffee(postId, { value: ethers.utils.parseEther("0.01") }))
        .to.emit(social, "PostTipped")
        .withArgs(postId, anyValue, ethers.utils.parseEther("0.01"), owner.address);
    });

    it("Should prevent tipping your own post", async function () {
      const { social, owner } = await loadFixture(deploySocialContractFixture);
      await social.connect(owner).addPost("Test Post", "test-image-hash");
      
      await expect(social.connect(owner).buyMeCoffee(0, { value: ethers.utils.parseEther("0.01") })).to.be.revertedWith("Cannot pay your own post");
    });
  });
});
