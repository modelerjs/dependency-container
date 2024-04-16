import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'

import { scopedDcPlugin } from '../plugin'

const stubComponent = {
  props: ['modelFactory'],
  // eslint-disable-next-line
  setup (props) {
    return {
      model: props.modelFactory(),
    }
  },
  template: '<div>I am stub</div>',
}

interface Options {
  localVue?: ReturnType<typeof createLocalVue>
}

export function createWrapperWithModel<T> (
  instanceProvider: () => T,
  options: Options = {},
): Wrapper<Vue> {
  const localVue = options.localVue || createLocalVue()
  localVue.use(scopedDcPlugin)

  return mount(
    stubComponent,
    {
      localVue,
      propsData: {
        modelFactory: instanceProvider,
      },
    },
  )
}

