import React from "react"

function TabsNav({ tabsStatus, changeTab }) {
  return (
    <div className="tabs__nav">
      <button className={tabsStatus.now ? "tabs__btn active" : "tabs__btn"} data-tab="now" onClick={
        () => changeTab({
          now: true,
          details: false,
          forecast: false
        })
      }>Now</button>
      <button className={tabsStatus.details ? "tabs__btn active" : "tabs__btn"} data-tab="details" onClick={
        () => changeTab({
          now: false,
          details: true,
          forecast: false
        })
      }>Details</button>
      <button className={tabsStatus.forecast? "tabs__btn active" : "tabs__btn"} data-tab="forecast" onClick={
        () => changeTab({
          now: false,
          details: false,
          forecast: true
        })
      }>Forecast</button>
    </div>
  );
}



export default TabsNav