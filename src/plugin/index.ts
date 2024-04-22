import Vue from 'vue'

import { installVue2 } from './vue2-install'
import { installVue3 } from './vue3-install'


export function scopedDcPlugin (app: typeof Vue): void {
  if (app.version[0] === '3') {
    installVue3(app)

    return 
  }

  installVue2(app)
}

