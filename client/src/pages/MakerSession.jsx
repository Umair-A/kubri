import React from 'react';
import { Tab } from '@headlessui/react';
import List from '../components/List';
import CMakerSession from '../components/CMakerSession';
import { Header } from '../components';

function MakerSession() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Maker Session" />
      <Tab.Group>
        <Tab.List>
          <Tab className="border dark:bg-gray-800 p-4 focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">List</Tab>
          <Tab className=" p-4 border focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Create a Maker Session</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><List /></Tab.Panel>
          <Tab.Panel><CMakerSession /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default MakerSession;
