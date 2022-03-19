import React, { useState } from 'react'
import TabNow from './NowTab';
import DetailsTab from './DetailsTab';
import ForecastTab from './forecastTab';
import TabsNav from './TabsNav';



function Tabs({ cityInfo, forecast }) {
  const [tabsStatus, setTabsStatus] = useState({
    now: true,
    details: false,
    forecast: false
  })

  return (
    <div className="tabs main__side">
      {tabsStatus.now && <TabNow cityInfo={cityInfo} />}
      {tabsStatus.details && <DetailsTab cityInfo={cityInfo} />}
      {tabsStatus.forecast && <ForecastTab forecast={forecast} />}
      <TabsNav tabsStatus={tabsStatus} changeTab={setTabsStatus} />
    </div>
  );
}

export default Tabs