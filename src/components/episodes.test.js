import React from 'react';
import Episodes from './Episodes'
import {render} from '@testing-library/react';

test('re-renders correctly with selected season', () => {
    const {queryAllByText, rerender, getByText} = render(<Episodes episodes={[]}/>)
    const initialEpisodes = queryAllByText(/season/i);
    expect(initialEpisodes).toHaveLength(0);

    rerender(<Episodes error='' episodes={data}/>)
    const episodes = getByText(/name/i)
    expect(episodes).toBeTruthy();
    expect(queryAllByText(/season/i)).toHaveLength(2);
})

const data = [
  {
    id: "1",
    image: { medium: "medium_image" },
    name: "name",
    season: 3,
    number: 2,
    summary: "<p>Summary</p>",
    runtime: 20,
  },
  {
    id: "2",
    image: { medium: "medium_image" },
    name: "Mike",
    season: 3,
    number: 1,
    summary: "<p>Summary</p>",
    runtime: 27,
  },
];