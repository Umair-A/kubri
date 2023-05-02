import React from 'react';
import { Tab } from '@headlessui/react';
import CAssetGroup from '../components/CAssetGroup';
import CAssetClass from '../components/CAssetClass';
import ListAssetGroup from '../components/ListAssetGroup';
import { Header } from '../components';

function AssetClassGroup() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Asset Class Group" />
      <Tab.Group>
        <Tab.List>
          <Tab className="border dark:bg-gray-800 p-4 focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">List</Tab>
          <Tab className=" p-4 border focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Create an Asset Class Group</Tab>
          <Tab className=" p-4 border focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Create an Asset Class</Tab>

        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><ListAssetGroup /></Tab.Panel>
          <Tab.Panel><CAssetGroup /></Tab.Panel>
          <Tab.Panel><CAssetClass /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default AssetClassGroup;
