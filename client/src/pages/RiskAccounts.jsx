import React from 'react';
import { Tab } from '@headlessui/react';
import ListRiskAccount from '../components/ListRiskAccount';
import CAccountGroup from '../components/CAccountGroup';
import CRiskAccount from '../components/CRiskAccount';
import { Header } from '../components';

function RiskAccounts() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Risk Accounts" />
      <Tab.Group>
        <Tab.List>
          <Tab className="border dark:bg-gray-800 p-4 focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">List</Tab>
          <Tab className=" p-4 border focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Create an Account Group</Tab>
          <Tab className=" p-4 border focus:border-gray-500 dark:border-gray-700 dark:text-gray-400">Create a Risk Account</Tab>

        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><ListRiskAccount /></Tab.Panel>
          <Tab.Panel><CAccountGroup /></Tab.Panel>
          <Tab.Panel><CRiskAccount /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default RiskAccounts;
