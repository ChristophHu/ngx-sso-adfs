import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import { NGX_SSO_ADFS_OPTIONS_TOKEN } from './token/ngx-sso-adfs-options-token'
import { NGX_SSO_ADFS_INITIALIZER_PROVIDER } from './ngx-sso-adfs-initializer.provider'
import { ISsoAdfsOptions } from './models/sso-adfs-options'

export function provideSsoAdfs(options: ISsoAdfsOptions): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: NGX_SSO_ADFS_OPTIONS_TOKEN,
            useValue: options
        },
        NGX_SSO_ADFS_INITIALIZER_PROVIDER
    ])
}