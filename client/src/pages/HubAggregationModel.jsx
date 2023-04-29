import React from 'react';
import { Tab } from '@headlessui/react';
import ListHAM from '../components/ListHAM';
import CHubAM from '../components/CHubAM';

function MakerSession() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Tab.Group>
        <Tab.List>
          <Tab className="border dark:bg-gray-800 p-4 focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Hub Aggregation Model</Tab>
          <Tab className=" p-4 border focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Create a Hub Aggregation Model</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><ListHAM /></Tab.Panel>
          <Tab.Panel><CHubAM /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default MakerSession;
