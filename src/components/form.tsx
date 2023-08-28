/* eslint-disable react/no-unescaped-entities */
import React from "react";


export default function Hero() {
  return (
<section className="bg-white">
  
    <aside
      className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
    >
      <img
        alt="Pattern"
        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
      

        <h1
          className="mt-6 text-2xl font-bold text-center text-gray-900 sm:text-3xl md:text-4xl"
        >
        Media Upload 📂
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
         Upload your media and get it verified by storing it on IPFS and storing the corresponding hash to the blockchain.
        </p>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
        

        
        <div className="flex mr-18 ml-48 mt-2">
    <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">File Upload</label>
            <div className="flex items-center justify-center w-full">
                <label
                    className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                    </div>
                    <input type="file" className="opacity-0" />
                </label>
            </div>
        </div>
        <div className="flex justify-center p-2">
            <button className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Create</button>
        </div>
    </div>
</div> 
         


          

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
           

           
          </div>
        </form>
      </div>
    </main>
 
</section>

  );
}
