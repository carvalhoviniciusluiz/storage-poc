export interface SetStorage<T = any> {
  set: (key: string, value: any) => Promise<T>
}
