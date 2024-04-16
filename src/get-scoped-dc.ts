import { getCurrentInstance } from 'vue'

import { DependencyDescriptorCollection } from './types'

export function getScopedDc (): DependencyDescriptorCollection {
  const currentInstance = getCurrentInstance()?.proxy
  const scopedDc = currentInstance?.$scopedDc

  if (!scopedDc) {
    throw new Error('Container undefined. Check plugin setup')
  }

  return scopedDc
}
