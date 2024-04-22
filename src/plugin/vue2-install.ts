import { DescriptorsContainer } from './descriptors-container'

const mixinForVue2 = {
  beforeCreate (): void {
    this.$scopedDc = this.$options.parent?.$scopedDc || this.$options.scopedDc

    if (this.$scopedDc) {
      return
    }

    this.$scopedDc = new DescriptorsContainer()
  },
}


export function installVue2 (vue): void {
  if (vue.prototype._scopedDcIntalled) {
    return
  }

  vue.prototype._scopedDcIntalled = true
  vue.mixin(mixinForVue2)
}
