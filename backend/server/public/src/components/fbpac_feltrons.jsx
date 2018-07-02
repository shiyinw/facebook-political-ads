import React from "react";
import { connect } from "react-redux";

const FbpacFeltronsUnconnected = ({ homepage_stats }) => (
  <div className="feltrons flexy">
    <div className="third">
      <h3>Political Ads Collected</h3>
      <div className="flexy">
        <div className="half">
          <span className="feltron">
            {homepage_stats ? homepage_stats.political_ads_today : "--"}
          </span>
          <p> ads today</p>
        </div>
        <div className="half">
          <span className="feltron">
            {homepage_stats && homepage_stats.political_ads_total
              ? homepage_stats.political_ads_total
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "--"}
          </span>
          <p>ads overall</p>
        </div>
      </div>
    </div>
    <div className="third">
      <h3>How many are political?</h3>
      <span className="feltron">
        ~{homepage_stats && homepage_stats.political_ads_ratio
          ? (homepage_stats.political_ads_ratio * 100).toString().split(".")[0]
          : "--"}%
      </span>
      <p>of U.S. Facebook ads collected this week</p>
    </div>
    <div className="third">
      <h3>Contributors</h3>
      <span className="feltron">
        {homepage_stats && homepage_stats.user_count
          ? homepage_stats.user_count
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          : "--"}
      </span>
      <p>all readers like you!</p>
    </div>
  </div>
);

const FbpacFeltrons = connect(
  ({ homepage_stats }) => ({ homepage_stats }),
  () => ({})
)(FbpacFeltronsUnconnected);
export default FbpacFeltrons;
