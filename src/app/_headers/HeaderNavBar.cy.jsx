/* eslint-disable no-undef */
import React from 'react'
import NavBar from './Header'


describe('<NavBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavBar />)
  })
})