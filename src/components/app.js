import React from 'react';
import { Component } from 'react';

import TagList from './TagList';

const tags = [
  { id: 1, name: 'music' },
  { id: 2, name: 'sports' },
  { id: 3, name: 'travel' }
];

const followingTags = [
  { id: 4, name: 'Programming' },
  { id: 5, name: 'JavaScript' },
];
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6 col-md-offset-1">
          <h1>Hello React</h1>
        </div>

        <div className="col-md-4">
          <TagList tags={tags} heading="Featured Tags" />

          <TagList tags={followingTags} heading="Tags You Follow" />
        </div>
      </div>
    );
  }
}
