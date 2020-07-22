import React from 'react';
import { GithubContext } from '../Context/Context';
import { Row } from 'reactstrap';
import Doughnut from './Doughnut';
import Pie from './Pie'
import './Charts.css'

const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

    const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  return (
    <Row className="charts-container">
      <div className="charts-center">
        <Doughnut data={mostUsed} />
        <Pie data={mostPopular} />
      </div>
    </Row>
  );
};

export default Repos;
