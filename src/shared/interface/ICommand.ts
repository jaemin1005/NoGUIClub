export interface SearchCmd {
  main : "search";
  sub : SearchSubCmd;
  value : string | null;
}

export interface CreateCmd {
  main : "create";
  sub : CreateSubCmd;
  value : string | null;
}

export interface HelpCmd{
  main : "help";
  sub : HelpSubCmd;
  value : null;
}

export type Command = SearchCmd | CreateCmd | HelpCmd;

export interface ICommandData {
  header : "ngc";
  command : Command;
  value : string | null;
}

export type CreateSubCmd = "-m" | null;
export type HelpSubCmd = null;  
export type SearchSubCmd = "-f" | "-g" | null;
