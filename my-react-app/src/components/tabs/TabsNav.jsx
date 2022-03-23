import React from "react"
import { tabNames } from "./Tabs";

function TabsNav({ tabsStatus, changeTab }) {
  return (
    <div className="tabs__nav">
      <button className={tabsStatus === tabNames.now ? "tabs__btn active" : "tabs__btn"} 
      data-tab="now" 
      onClick={
        () => changeTab(tabNames.now)
      }>Now</button>
      <button className={tabsStatus === tabNames.details ? "tabs__btn active" : "tabs__btn"} 
      data-tab="details" 
      onClick={
        () => changeTab(tabNames.details)
      }>Details</button>
      <button className={tabsStatus === tabNames.forecast ? "tabs__btn active" : "tabs__btn"} 
      data-tab="forecast" 
      onClick={
        () => changeTab(tabNames.forecast)
      }>Forecast</button>
    </div>
  );
}



export default TabsNav