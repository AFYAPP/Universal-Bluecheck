import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import React, { useState, useEffect } from "react";

const Home: NextPage = () => {

  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => { }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "filename") {
      setFileName(e.target.value);
    }
    if (e.target.name === 'file') {
      const selectedFile = e.target.files?.[0]; // Perform a null check
      setFile(selectedFile!); // Assert the existence using the non-null assertion operator
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      var formData = new FormData();
      formData.append("filename", fileName);
      if (file) {
        formData.append('file', file);
      }
      const res = await fetch("/api/uploadData", {
        method: "POST",
        body: formData
      });

      if (!res.ok) {
        throw new Error("Network response is not ok");
      }
      const data = await res.json();
      setResult(data.message);

    } catch (err) {
      console.error(err);
    }
  }








  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
          </h1>
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold">packages/nextjs/pages/index.tsx</code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract <code className="italic bg-base-300 text-base font-bold">YourContract.sol</code> in{" "}
            <code className="italic bg-base-300 text-base font-bold">packages/hardhat/contracts</code>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">


            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">

              <BugAntIcon className="h-8 w-8 fill-secondary" />
            
              <div className={'container'}>
      <header className={'header'}>
        <h1>⁂<span>Store IPFS hash on blockchain</span>⁂</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label className={'lable'}>Enter Unique Filename: </label>
        <input type="text" name="filename" value={fileName} onChange={handleChange} className={'input'}></input>
        <br />
        <input type="file" name="file" onChange={handleChange} className={'input'}></input>
        <br />
        <input type="Submit" className={'button'}></input>
      </form>

      {result && <p className={result}>{result}</p>}
    </div>
              
            </div>
            
           
          </div>


        </div>
      </div>
    </>
  );
};

export default Home;
