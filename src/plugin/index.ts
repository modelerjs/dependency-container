import Vue from 'vue'

import { mixinForVue2 } from './mixin-for-vue2'

function installVue2 (vue): void {
  if (vue.prototype._scopedDcIntalled) {
    return
  }

  vue.prototype._scopedDcIntalled = true
  vue.mixin(mixinForVue2)
}

export function scopedDcPlugin (app: typeof Vue): void {
  installVue2(app)
}

