import React from 'react';
import { Tab } from '@headlessui/react';
import TMakerSession from '../components/TMakerSession';
import { TakerList, Header } from '../components';

function takerSession() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Taker Session" />
      <Tab.Group>
        <Tab.List>
          <Tab className="border dark:bg-gray-800 p-4 focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">List</Tab>
          <Tab className=" p-4 border focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Create a Taker</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><TakerList /></Tab.Panel>
          <Tab.Panel><TMakerSession /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default takerSession;
