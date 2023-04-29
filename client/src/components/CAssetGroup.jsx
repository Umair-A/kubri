/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function CAssetGroup() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label>Asset Class group</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Description</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white ml-5 font-bold py-2 px-4 rounded">
          Cancel
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white ml-5 font-bold py-2 px-4 rounded">
          Reset
        </button>
      </form>
    </div>
  );
}

export default CAssetGroup;
