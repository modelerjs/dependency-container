import { DependencyDescriptors } from './dependency-descriptors'

export const mixinForVue2 = {
  beforeCreate (): void {
    this.$scopedDc = this.$options.parent?.$scopedDc || this.$options.scopedDc

    if (this.$scopedDc) {
      return
    }

    this.$scopedDc = new DependencyDescriptors()
  },
}
