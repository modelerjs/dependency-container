import { DescriptorsContainer } from './descriptors-container'

const mixinForVue2 = {
  beforeCreate (): void {
    this.$dependencyContainer = this.$options.parent?.$dependencyContainer || this.$options.scopedDc

    if (this.$dependencyContainer) {
      return
    }

    this.$dependencyContainer = new DescriptorsContainer()
  },
}


export function vue2Install (vue): void {
  if (vue.prototype._scopedDcIntalled) {
    return
  }

  vue.prototype._scopedDcIntalled = true
  vue.mixin(mixinForVue2)
}
