declare const _brand: unique symbol

export type Brand<K, T> = K & { [_brand]: T }
