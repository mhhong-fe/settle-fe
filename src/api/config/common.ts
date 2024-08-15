import type { ARC } from 'axios';
import type { CommonResponseData } from '..';

export interface GetUserInfoPayload {
    name: string;
}

export interface UserInfoRes {
    name: string;
    tech: string;
}

/**
 * @description 查询用户信息
 */
export function API_GET_USER_INFO(
    payload: GetUserInfoPayload,
): ARC<CommonResponseData<UserInfoRes>> {
    return {
        url: 'api/user',
        method: 'get',
        params: payload,
    };
}

interface UpdateUserPayload {
    name: string;
    tech: string;
}

/**
 * @description 更新用户信息
 */
export function API_UPDATE_USER_INFO(
    payload: UpdateUserPayload,
): ARC<CommonResponseData> {
    return {
        url: 'api/user',
        method: 'get',
        params: payload,
    };
}
