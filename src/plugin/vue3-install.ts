import { DescriptorsContainer } from './descriptors-container'

export function installVue3 (app): void {
  if (app.config.globalProperties.$scopedDc) {
    return
  }

  app.config.globalProperties.$scopedDc = new DescriptorsContainer()
}
