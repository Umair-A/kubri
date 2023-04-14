/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function CMakerApiLink() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label>ID</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Symbols</label>
            <textarea rows="5" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Symbols..." />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Takers</label>
            <textarea rows="5" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Takers..." />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Shared IDs</label>
            <textarea rows="5" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Share IDs..." />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Taker Execution Models</label>
            <textarea rows="5" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Taker Execution Models..." />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Sides</label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>*,</option>
                <option>*,</option>
                <option>*,</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Hub Aggregation Models</label>
            <textarea rows="5" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Hub Aggregation Models..." />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Ord Types</label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>*,</option>
                <option>*,</option>
                <option>*,</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Securities</label>
            <textarea rows="5" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Securities..." />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Priority</label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>*,</option>
                <option>*,</option>
                <option>*,</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mt-8">
            <input id="default-checkbox" type="checkbox" />
            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enable</label>
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

export default CMakerApiLink;
