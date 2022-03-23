import React, { useState } from 'react'
import TabNow from './NowTab';
import DetailsTab from './DetailsTab';
import ForecastTab from './forecastTab';
import TabsNav from './TabsNav';

export const tabNames = {
  now: 'now',
  details: 'details',
  forecast: 'forecast'
}

function Tabs({ cityInfo, forecast }) {
  const [tabsStatus, setTabsStatus] = useState(tabNames.now)

  function changeTab(name) {
    if (name) setTabsStatus(name)  
  }

  return (
    <div className="tabs main__side">
      {tabsStatus === tabNames.now && <TabNow cityInfo={cityInfo} />}
      {tabsStatus === tabNames.details && <DetailsTab cityInfo={cityInfo} />}
      {tabsStatus === tabNames.forecast && <ForecastTab forecast={forecast} />}
      <TabsNav tabsStatus={tabsStatus} changeTab={changeTab} />
    </div>
  );
}

export default Tabs