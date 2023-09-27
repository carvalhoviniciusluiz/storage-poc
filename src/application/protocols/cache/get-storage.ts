export interface GetStorage<T = any> {
  get: (key: string) => Promise<T>
}
