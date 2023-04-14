/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

const CMakerSession = () => {
  const [sessionData, setSessionData] = useState({
    userName: '',
    password: '',
    serverAddress: '',
    account: '',
    senderCompId: '',
    sessionQualifier: '',
    targetCompId: '',
    sharedId: '',
    currency: '',

  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/session', sessionData);
      alert('Form data submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to submit form data');
    }
  };

  const handleChange = (e) => {
    setSessionData({ ...sessionData, [e.target.name]: e.target.value });
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
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
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label>User Name</label>
            <input value={sessionData.userName} onChange={handleChange} name="userName" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
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
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Password</label>
            <input value={sessionData.password} onChange={handleChange} name="password" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Server Address</label>
            <input value={sessionData.serverAddress} onChange={handleChange} name="serverAddress" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Account</label>
            <input value={sessionData.account} onChange={handleChange} name="account" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Sender CompId</label>
            <input value={sessionData.senderCompId} onChange={handleChange} name="senderCompId" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Session Qualifier</label>
            <input value={sessionData.sessionQualifier} onChange={handleChange} name="sessionQualifier" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Target CompId</label>
            <input value={sessionData.targetCompId} onChange={handleChange} name="targetCompId" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Shared Id</label>
            <input value={sessionData.sharedId} onChange={handleChange} name="sharedId" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>Currency</label>
            <input value={sessionData.currency} onChange={handleChange} name="currency" className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3 mt-8">
            <input id="default-checkbox" type="checkbox" />
            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reset On Logon</label>
            <input id="default-checkbox" type="checkbox" />
            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">SSL Protocol</label>
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
};

export default CMakerSession;
