import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Whale() {
  const { type } = useParams();

  return (
    <>
      <h2>Whale</h2>
      {type === 'beluga' && <Beluga />}
      {type === 'blue' && <Blue />}
    </>
  );
}