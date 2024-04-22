import { getCurrentInstance } from 'vue'

import { DescriptorsContainer } from './plugin/descriptors-container'

export function getScopedDc (): DescriptorsContainer {
  const currentInstance = getCurrentInstance()?.proxy
  const scopedDc = currentInstance?.$scopedDc

  if (!scopedDc) {
    throw new Error('Container undefined. Check plugin setup')
  }

  return scopedDc
}
