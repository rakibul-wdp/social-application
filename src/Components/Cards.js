import React from 'react';
import "../css/Card.css";
import "../css/Common.css";
import ArticleCard from './ArticleCard';
import EducationCard from './EducationCard';
import JobCard from './JobCard';
import MeetupCard from './MeetupCard';
import SearchContent from "./SearchContent";

const Cards = () => {
  return (
    <div className="card-main">
      <div className="card-division">
        <ArticleCard/>
        <EducationCard/>
        <MeetupCard/>
        <JobCard/>
      </div>
      <SearchContent/>
    </div>
  );
};

export default Cards;