import { inject, provideAppInitializer, Provider } from "@angular/core"
import { NGX_SSO_ADFS_OPTIONS_TOKEN } from "./token/ngx-sso-adfs-options-token"
import { ISsoAdfsOptions } from "./models/sso-adfs-options"

export const NGX_SSO_ADFS_INITIALIZER_PROVIDER: Provider = [
    provideAppInitializer(() => SsoAdfsInitializer(inject(NGX_SSO_ADFS_OPTIONS_TOKEN)))
]

export function SsoAdfsInitializer(options: ISsoAdfsOptions): Promise<void> {
  return new Promise<void>((resolve) => {
    resolve()
  })
}