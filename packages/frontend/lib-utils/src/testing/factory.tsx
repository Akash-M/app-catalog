/* eslint-disable import/named */
import { RenderResult, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';

export function customRenderer(
  Component: ({ children }: any) => JSX.Element,
  initializeState?: (mutableSnapshot: MutableSnapshot) => void,
  props?: any,
): RenderResult {
  return render(
    <RecoilRoot initializeState={initializeState}>
      <Component {...props} />
    </RecoilRoot>,
    {
      wrapper: MemoryRouter as any,
    },
  );
}
