import React from 'react';

function CMakerSession() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label>Maker Session type</label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label>User Name</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='text' />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Maker Category</label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Password</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='text' />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Server Address</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='text' />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Account</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='text' />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Sender CompId</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='text' />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Session Qualifier</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='text' />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Target CompId</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='text' />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Shared Id</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='text' />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Currency</label>
            <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='text' />
          </div>
          <div className="w-full md:w-1/2 px-3 mt-8">
            <input id="default-checkbox" type="checkbox" />
            <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reset On Logon</label>
            <input id="default-checkbox" type="checkbox" />
            <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">SSL Protocol</label>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white ml-5 font-bold py-2 px-4 rounded">
          Cancel
        </button>
        <button class="bg-gray-500 hover:bg-gray-700 text-white ml-5 font-bold py-2 px-4 rounded">
          Reset
        </button>
      </form>
    </div>
  );
}

export default CMakerSession;