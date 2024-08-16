import { page } from '$app/stores';
import { UserAccess } from '@/lib/auth/access';
import { derived } from 'svelte/store';

interface Overrides {
  access: UserAccess;
}

type UserStore =
  | (Omit<App.Session, keyof Overrides> & Overrides)
  | ({ [K in Exclude<keyof App.Session, keyof Overrides>]?: undefined } & Overrides);

const { subscribe } = derived(
    page,
    ({ data: { session } }): UserStore => ({
        ...session,
        access: UserAccess.from(session.access),
    }),
);

export const user = {
    subscribe,
}