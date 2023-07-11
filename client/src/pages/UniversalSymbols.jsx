import React from 'react';
import { Tab } from '@headlessui/react';
import { Header } from '../components';
import ListUniversalSymbols from '../components/ListsUniversalSymbols';
import CUniversalSymbols from '../components/CUniversalSymbols';

function UniversalSymbols() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Universal Symbols" />
      <Tab.Group>
        <Tab.List>
          <Tab className="border dark:bg-gray-800 p-4 focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">List of Universal Symbols</Tab>
          <Tab className=" p-4 border focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Create Universal Symbols</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><ListUniversalSymbols /></Tab.Panel>
          <Tab.Panel><CUniversalSymbols /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default UniversalSymbols;

