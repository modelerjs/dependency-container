import { onScopeDispose } from 'vue'

import { getScopedDc } from './get-scoped-dc'
import { DependencyFactory, Provider } from './types'

export function defineProvider<Target> (
  factory: DependencyFactory<Target>,
): Provider<Target> {
  return (): Target => {
    const scopedDc = getScopedDc()

    const dependencyDescriptor = scopedDc.get<Target>(factory) || scopedDc.add(factory)

    dependencyDescriptor.subscribeOnScopeDispose(
      (scopeDisposeSubscriber) => {
        onScopeDispose(
          () => {
            const descriptor = scopeDisposeSubscriber()

            if (descriptor.scopeCount) {
              return
            }

            scopedDc.delete(descriptor.factory)
          },
        )
      },
    )

    return dependencyDescriptor.instance
  }
}
