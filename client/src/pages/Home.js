import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings, NotFound } from '../components';
import { Securities, Employees, Pyramid, Customers, Line, Area, Bar, Financial, UniversalSymbols, LPSession, BrokerSession, LPApiLink, BrokerFeeds, BrokerExecutionModels, HubAggregationModel, MarkupModels } from '.';
import '../App.css';

import { useStateContext } from '../contexts/ContextProvider';
import RiskAccounts from './RiskAccounts';
import AssetClassGroup from './AssetClassGroup';
import GiveUpRule from './GiveUpRule';
import FiltrationPool from './FiltrationPool';

const Home = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? ' dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full '
                : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Securities />)} />
                {/* <Route path="/" element={(<Login />)} /> */}
                <Route path="/securities" element={(<Securities />)} />
                <Route path="/universal-Symbols" element={(<UniversalSymbols />)} />
                <Route path="/lp-Session" element={(<LPSession />)} />
                <Route path="/broker-Session" element={(<BrokerSession />)} />
                <Route path="/Hub-Aggregation-Model" element={(<HubAggregationModel />)} />
                <Route path="/LP-Api-Link" element={(<LPApiLink />)} />
                <Route path="/Broker-Feeds" element={(<BrokerFeeds />)} />
                <Route path="/Spread" element={(<MarkupModels />)} />
                <Route path="/Broker-Execution-Models" element={(<BrokerExecutionModels />)} />
                <Route path="/Risk-Accounts" element={(<RiskAccounts />)} />
                <Route path="/Asset-Class-Group" element={(<AssetClassGroup />)} />
                {/* <Route path="/RiskUsers" element={(<RiskUsers />)} /> */}
                {/* <Route path="/TradeCopier" element={(<TradeCopier />)} /> */}
                <Route path="/Link-Role" element={(<GiveUpRule />)} />
                <Route path="/Filtration" element={(<FiltrationPool />)} />
                <Route path="/Broker-View" element={(<NotFound />)} />
                <Route path="/Trader-View" element={(<NotFound />)} />
                <Route path="/Position" element={(<NotFound />)} />
                <Route path="/Orders" element={(<NotFound />)} />
                <Route path="/LP-Orders" element={(<NotFound />)} />
                <Route path="/Link-Rule" element={(<NotFound />)} />
                <Route path="/Legs-Report" element={(<NotFound />)} />
                <Route path="/Fills-Report" element={(<NotFound />)} />
                <Route path="/Mt4Reports" element={(<NotFound />)} />
                <Route path="/Mt5Reports" element={(<NotFound />)} />
                <Route path="/Trader-Transaction" element={(<NotFound />)} />
                <Route path="/Price-Improvement" element={(<NotFound />)} />
                <Route path="/LP-National" element={(<NotFound />)} />
                <Route path="/Symbol-Notional" element={(<NotFound />)} />
                <Route path="/Logs" element={(<NotFound />)} />
                <Route path="/Broker-Status" element={(<NotFound />)} />
                <Route path="/LP-Status" element={(<NotFound />)} />
                <Route path="/Feeder-Status" element={(<NotFound />)} />
                <Route path="/Give-Up-Orders" element={(<NotFound />)} />
                <Route path="/Risk-Account-Statements" element={(<NotFound />)} />
                <Route path="/Journals" element={(<NotFound />)} />
                <Route path="/Broker-Status" element={(<NotFound />)} />
                <Route path="/Quant-Based-Hybrid" element={(<NotFound />)} />
                <Route path="/Exposure-Based-Hedging" element={(<NotFound />)} />
                {/* pages  */}

                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                {/* <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} /> */}

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                {/* <Route path="/pie" element={<Pie />} /> */}
                <Route path="/financial" element={<Financial />} />
                {/* <Route path="/color-mapping" element={<ColorMapping />} /> */}
                <Route path="/pyramid" element={<Pyramid />} />
                {/* <Route path="/stacked" element={<Stacked />} /> */}

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Home;
