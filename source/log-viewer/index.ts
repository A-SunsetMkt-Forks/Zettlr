/**
 * @ignore
 * BEGIN HEADER
 *
 * Contains:        Log Viewer window entry file
 * CVM-Role:        <none>
 * Maintainer:      Hendrik Erz
 * License:         GNU GPL v3
 *
 * Description:     This file is the log viewer's procedural file. It is
 *                  the main entry point for the application. It simply loads
 *                  the renderer process and initialises everything.
 *
 * END HEADER
 */

import windowRegister from '../common/modules/window-register'
import Vue from 'vue'
import LogViewer from './log-viewer.vue'

// Create the Vue app because we need to reference it in our toolbar controls
const app = new Vue(LogViewer)

windowRegister({
  // The log viewer does not have a menubar
  showMenubar: false,
  toolbarControls: [
    {
      type: 'text',
      content: 'Log Viewer',
      style: 'strong'
    },
    {
      type: 'toggle',
      label: 'Verbose',
      activeClass: 'verbose-control-active',
      initialState: 'active',
      onClickHandler: (state: boolean) => {
        app.$data.includeVerbose = state
      }
    },
    {
      type: 'toggle',
      label: 'Info',
      activeClass: 'info-control-active',
      initialState: 'active',
      onClickHandler: (state: boolean) => {
        app.$data.includeInfo = state
      }
    },
    {
      type: 'toggle',
      label: 'Warning',
      activeClass: 'warning-control-active',
      initialState: 'active',
      onClickHandler: (state: boolean) => {
        app.$data.includeWarning = state
      }
    },
    {
      type: 'toggle',
      label: 'Error',
      activeClass: 'error-control-active',
      initialState: 'active',
      onClickHandler: (state: boolean) => {
        app.$data.includeError = state
      }
    },
    {
      type: 'spacer', // Make sure the content is flushed to the left
      size: '5x'
    }
  ]
})

// In the end: mount the app onto the DOM
app.$mount('#app')
