interface ICustomElement<T extends keyof HTMLElementTagNameMap> {
  elem : T;
  property? : Partial<HTMLElementTagNameMap[T]>;
  style? : Partial<CSSStyleDeclaration>
}