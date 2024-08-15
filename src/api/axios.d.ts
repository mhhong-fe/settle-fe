import 'axios';

declare module 'axios' {
    // D用来标注请求体类型，同名interface会被合并
    export interface AxiosRequestConfig<D> {
        alertOnError?: boolean;
    }

    // T用来标注返回值类型
    export interface ARC<T, D = any> extends AxiosRequestConfig<D> {
    }
}
