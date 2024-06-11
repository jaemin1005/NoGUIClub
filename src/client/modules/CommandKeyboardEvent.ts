/** Command의 KeyboardEvent에 대한 클래스 */
export abstract class CommandKeyboardEvent<T extends keyof HTMLElementTagNameMap> implements ICommandKeyboardEvent{

  watchElem : HTMLElementTagNameMap[T];

  constructor(elem : HTMLElementTagNameMap[T]){
    this.watchElem = elem   
  }

  Enter(event : KeyboardEvent){
    if (event.isComposing == true || event.key !== "Enter") return;
    this.EnterCbFunc(event);
  }

  Escape(event : KeyboardEvent){
    if (event.isComposing == true || event.key !== "Escape") return;
    this.EscapeCbFunc(event);
  }

  abstract EnterCbFunc(event : KeyboardEvent) : void;
  abstract EscapeCbFunc(event: KeyboardEvent) : void;
}