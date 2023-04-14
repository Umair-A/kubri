import React from 'react';
import { Tab } from '@headlessui/react';
import MakerLink from '../components/MakerLink';
import { CMakerApiLink } from '../components';

function MakerApiLink() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Tab.Group>
        <Tab.List>
          <Tab className="border dark:bg-gray-800 p-4 focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Maker Api Link</Tab>
          <Tab className=" p-4 border focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Create a Maker Api Link</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><MakerLink /></Tab.Panel>
          <Tab.Panel><CMakerApiLink /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default MakerApiLink;
