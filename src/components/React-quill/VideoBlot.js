import React, { Component } from 'react';
import  quill from 'quill';
let BlockEmbed = quill.import('blots/block/embed');
const VidemoBlot = () => (
  <div><video src="movie.ogg" controls="controls-video"></video></div>
)

export default VidemoBlot
