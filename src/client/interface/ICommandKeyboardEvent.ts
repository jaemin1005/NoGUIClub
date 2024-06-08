interface ICommandKeyboardEvent {
  Enter : (event : KeyboardEvent) => void;
  Escape : (event : KeyboardEvent) => void;

  EnterCbFunc : (event : KeyboardEvent) => void;
  EscapeCbFunc : (event : KeyboardEvent) => void;
}