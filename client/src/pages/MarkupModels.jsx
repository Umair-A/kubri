import React from 'react';
import { Tab } from '@headlessui/react';
import ListMarkupModel from '../components/ListMarkupModel';
import CMarkupModel from '../components/CMarkupModel';

function MakerSession() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Tab.Group>
        <Tab.List>
          <Tab className="border dark:bg-gray-800 p-4 focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">List</Tab>
          <Tab className=" p-4 border focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Create a Markup Model</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><ListMarkupModel /></Tab.Panel>
          <Tab.Panel><CMarkupModel /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default MakerSession;
