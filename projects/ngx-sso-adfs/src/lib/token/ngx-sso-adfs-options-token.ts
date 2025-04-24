import { InjectionToken } from '@angular/core'
import { ISsoAdfsOptions } from '../models/sso-adfs-options'

/**
 * Provide an Injection Token for global settings.
 */
export const NGX_SSO_ADFS_OPTIONS_TOKEN = new InjectionToken<ISsoAdfsOptions>('ngx-notifications-options-token', {
    factory: () => ({})
})