export type DependencyFactory<Target> = (...args: any[]) => Target extends void ? never : Target

export interface DependencyDescriptor<Target> {
  readonly factory: DependencyFactory<Target>
  readonly instance: Target
  readonly scopeCount: number
  subscribeOnScopeDispose: (onScopeDispose: (subscriber: () => DependencyDescriptor<Target>) => void) => void
  destructor: () => void
}

export interface Factory<Target> {
  (): Target
}

export type Provider<Target> = () => Target

export interface DependencyDescriptorCollection {
  readonly size: number

  add: <Target>(
    factory: DependencyFactory<Target>,
  ) => DependencyDescriptor<Target>
  get: <Target>(key: DependencyFactory<Target>) => DependencyDescriptor<Target> | undefined
  delete: <Target>(key: DependencyFactory<Target>) => boolean
  clean: () => void
}

export interface ModelDescriptorCollectionConstructor {
  new (): DependencyDescriptorCollection
}

export interface ScopedDcPlugin {
  readonly dependencyDescriptors: DependencyDescriptorCollection
}
