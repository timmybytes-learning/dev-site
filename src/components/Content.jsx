import React from 'react';
import Data from '../data.json';

function Content() {
  const dataHeading = Data.topics[0].topic;
  const dataSummary = Data.topics[0].summary;
  const subTopics = Data.topics[0].subTopics;
  const topicResourcesRead = Data.topics[0].topicResources.read;
  // const topicResourcesWatch = Data.topics[0].topicResources.watch;

  Data.topics.forEach((id) => {
    let arr = [];
    arr.push(id);
    console.log(arr);
  });

  function getResourceLinks(obj) {
    let objArr = [];
    for (let [key, value] of Object.entries(obj)) {
      objArr.push(`${value}:${key}`);
    }
    return objArr.splice(':');
  }

  const resList = getResourceLinks(topicResourcesRead);
  console.log(topicResourcesRead);

  return (
    <div className='border content'>
      <h2> {dataHeading} </h2> <br />
      <p> {dataSummary} </p> <br />
      <ol>
        Topics{' '}
        {subTopics.map((subs) => (
          <li key={subs}> {subs} </li>
        ))}{' '}
      </ol>{' '}
      <ol>
        Resources {/* TODO: Use function to parse key and values in resList.map() */}{' '}
        {resList.map((res) => (
          <li>
            <a href={res}> Link </a>{' '}
          </li>
        ))}{' '}
      </ol>{' '}
    </div>
  );
}

export default Content;
