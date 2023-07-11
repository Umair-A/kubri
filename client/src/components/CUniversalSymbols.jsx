/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

function CUniversalSymbols() {
  const [universalSymbols, setUniversalSymbols] = useState({
    universal_symbols: '',
    security: '',
    base: '',
    quote: '',
    categories: '',
    isin: '',
    description: '',
    digits: '',
    exposure_multiplyer: '',
    sessions: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/kbt/server/index.php/universal_symbols', universalSymbols);
      alert('Form data submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to submit form data');
    }
  };
  const handleChange = (e) => {
    setUniversalSymbols({ ...universalSymbols, [e.target.name]: e.target.value });
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label>Universal Symbol</label>
            <input value={universalSymbols.universal_symbols} onChange={handleChange} name="universal_symbols" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Category</label>
            <input value={universalSymbols.categories} onChange={handleChange} name="categories" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Security</label>
            <div className="relative">
              <select value={universalSymbols.security} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="fx">FX</option>
                <option value="CFD">CFD</option>
                <option value="Crypto">Crypto</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>ISIN</label>
            <input value={universalSymbols.isin} onChange={handleChange} name="isin" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Base</label>
            <input value={universalSymbols.base} onChange={handleChange} name="base" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Quote</label>
            <input value={universalSymbols.quote} onChange={handleChange} name="quote" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Digits</label>
            <input value={universalSymbols.digits} onChange={handleChange} name="digits" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Exposure Multiplyer</label>
            <input value={universalSymbols.exposure_multiplyer} onChange={handleChange} name="exposure_multiplyer" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Sessions</label>
            <textarea value={universalSymbols.sessions} onChange={handleChange} name="sessions" rows="5" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="MON,00:23:59;TUE,00:23:59;" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Description</label>
            <textarea value={universalSymbols.description} onChange={handleChange} name="description" rows="5" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Description" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Enable</label>
            <div className="w-full md:w-1/2 px-3 mt-2">
              <input id="default-checkbox" type="checkbox" />
              <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enable</label>
            </div>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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

export default CUniversalSymbols;
