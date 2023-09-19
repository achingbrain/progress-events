/* eslint-env mocha */

import { expect } from 'aegir/chai'
import { CustomProgressEvent } from '../src/index.js'

describe('progress', () => {
  it('should have type and detail properties', async () => {
    const type = 'event-type'
    const detail = 'event-detail'

    const event = new CustomProgressEvent<string>(type, detail)

    expect(event).to.have.property('type', type)
    expect(event).to.have.property('detail', detail)
  })
})
