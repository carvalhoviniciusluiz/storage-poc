export interface SetStorage<T = any> {
  set: (key: any, value?: any) => Promise<T>
}
