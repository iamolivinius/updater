import {expect} from 'chai'
import * as sinon from 'sinon'

import * as fetchMock from 'fetch-mock'
import {update} from '../src/updater'

describe('test updater', () => {
  before(() => {
    fetchMock.mock('https://secure-software-engineering.github.io/rose/example/base.json', "HELLO WORLD", {method: 'GET'})
  })

  after(() => {
    fetchMock.restore();
  })

  it('should work', () => {
    expect(2).to.be.equal(2)
  })

  it('out should request', async () => {
    const res = await update()
    expect(await res.text()).to.be.equal("HELLO WORLD")
  })
})
