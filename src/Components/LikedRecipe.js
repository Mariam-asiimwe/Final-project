
import React from 'react';

export default function MyCheckbox({liked,setLiked}) {

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleChange}
        />
        I enjoyed this!
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </>
  );
}
