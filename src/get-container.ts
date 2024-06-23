import { getCurrentInstance } from 'vue'

import { DescriptorsContainer } from './plugin/descriptors-container'

export function getContainer (): DescriptorsContainer {
  const currentInstance = getCurrentInstance()?.proxy
  const scopedDc = currentInstance?.$dependencyContainer

  if (!scopedDc) {
    throw new Error('Container undefined. Check plugin setup')
  }

  return scopedDc
}
