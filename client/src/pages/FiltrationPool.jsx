import React from 'react';
import { Tab } from '@headlessui/react';
import CAccountGroup from '../components/CAccountGroup';
import ListUsers from '../components/ListUsers';
import { Header } from '../components';

function FiltrationPool() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Filtration Pool" />
      <Tab.Group>
        <Tab.List>
          <Tab className="border dark:bg-gray-800 p-4 focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Filtration Pool</Tab>
          <Tab className=" p-4 border focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Create a Filtration Pool</Tab>

        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><ListUsers /></Tab.Panel>
          <Tab.Panel><CAccountGroup /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default FiltrationPool;
