import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgetsArticle">
      <div className="widgetsArticleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgetsArticleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgetsHeader">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("News test 1", "subtitle of test1")}
      {newsArticle("News test 2", "subtitle of test2")}
      {newsArticle("News test 3", "subtitle of test3")}
      {newsArticle("News test 4", "longer subtitle of test4")}
      {newsArticle("News test 5", "longer then test 4 subtitle of test5")}
    </div>
  );
};

export default Widgets;
