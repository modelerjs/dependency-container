import { createLocalVue, mount } from '@vue/test-utils'

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

export function getInstance<T> (
  instanceProvider: () => T,
  options: Options = {},
): T {
  const localVue = options.localVue || createLocalVue()
  localVue.use(scopedDcPlugin)

  const wrapper = mount(
    stubComponent,
    {
      localVue,
      propsData: {
        modelFactory: instanceProvider,
      },
    },
  )

  return wrapper.vm.model
}
