import { getStatus } from './status.js';
import { getMenu } from './menu.js';

export default [
    {
        method: 'GET',
        path: '/status',
        isPublic: true,
        cbs: [getStatus],
    },
    {
        method: 'GET',
        path: '/menu',
        isPublic: true,
        cbs: [getMenu],
    },
];
