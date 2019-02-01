import _ from 'lodash';
import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider';
import ContainerDimensions from 'react-container-dimensions';

import imgLogo from './logo.svg';

import image4orig from './photos/image4orig.jpg';
import image4alt from './photos/image4alt.jpg';
import image0orig from './photos/image0orig.jpg';
import image0alt from './photos/image0alt.jpg';
import image3orig from './photos/image3orig.jpg';
import image3alt from './photos/image3alt.jpg';
import image1orig from './photos/image1orig.jpg';
import image1alt from './photos/image1alt.jpg';
import image2orig from './photos/image2orig.jpg';
import image2alt from './photos/image2alt.jpg';

const imageList = [
  {
    id: 1,
    before: image4orig,
    after: image4alt,
    title: 'Looking down Division',
    height: 350
  },
  {
    id: 2,
    before: image0orig,
    after: image0alt,
    title: 'Sammy\'s Place',
    height: 10
  },
  {
    id: 3,
    before: image3orig,
    after: image3alt,
    title: 'Main St., approaching the Square',
    height: 250
  },
  {
    id: 4,
    before: image1orig,
    after: image1alt,
    title: 'East Troy House & Ivan\'s on the Square',
    height: 0
  },
  {
    id: 5,
    before: image2orig,
    after: image2alt,
    title: 'East Troy Brewery, James R Taylor & Sons',
    height: 0
  }
]

class App extends React.Component {
  state = {

  }
  render() {
    return (
      <div className="app-wrapper">

        <h1>
          <img src={imgLogo} style={{ width: 38 }} alt="East Troy" />
          {' '}
          Without Poles
        </h1>

        <p>
          Imagine East Troy without utility poles. We gain back precious square footage and reduce the amount of lines you see in the sky; putting more focus on the buildings and their businesses. An overall better design.
        </p>

        <p>
          Instructions: Run your finger or mouse across photos and watch the poles disappear.
        </p>

        <p style={{ marginBottom: 60 }}>
          a <a href="http://twitter.com/jjj" target="_blank" rel="noopener noreferrer">John Jacoby</a> + <a href="http://twitter.com/flowpoke" target="_blank" rel="noopener noreferrer">Ben Keating</a> collaboration
        </p>

        <ContainerDimensions>
          { ({ width, height }) =>

            <div>
              {_.map(imageList, (img) => [

                <h2 key={img.id} style={{ marginTop: 50, marginBottom: 10 }}>
                  {img.title}
                </h2>,

                <BeforeAfterSlider
                  key={img.id*10}
                  before={img.before}
                  after={img.after}
                  width={width}
                  height={(width / 2 ) + img.height}
                />

              ])}
            </div>

          }
        </ContainerDimensions>

      </div>
    );
  }
}

export default App;
