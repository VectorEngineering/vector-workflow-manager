import 'server-only'

import { Svix } from 'svix'
import { auth } from '@playbookmedia/auth/server'
import { env } from '@playbookmedia/env'

export const send = async (eventType: string, payload: object) => {
    if (!env.SVIX_TOKEN) {
        throw new Error('SVIX_TOKEN is not set')
    }

    const svix = new Svix(env.SVIX_TOKEN)
    const { orgId } = await auth()

    if (!orgId) {
        return
    }

    return svix.message.create(orgId, {
        eventType,
        payload: {
            eventType,
            ...payload
        },
        application: {
            name: orgId,
            uid: orgId
        }
    })
}

export const getAppPortal = async () => {
    if (!env.SVIX_TOKEN) {
        throw new Error('SVIX_TOKEN is not set')
    }

    const svix = new Svix(env.SVIX_TOKEN)
    const { orgId } = await auth()

    if (!orgId) {
        return
    }

    return svix.authentication.appPortalAccess(orgId, {
        application: {
            name: orgId,
            uid: orgId
        }
    })
}
