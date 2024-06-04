interface IEventMap<T extends keyof HTMLElementEventMap, K extends Element>{
  type : T,
  func : ((this: K, ev: HTMLElementEventMap[T]) => any); 
}

type UseEventMap = IEventMap<"input", HTMLInputElement> | IEventMap<"keydown", HTMLInputElement>;