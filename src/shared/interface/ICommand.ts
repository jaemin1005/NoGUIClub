interface SearchCmd {
  main : "search";
  sub : SearchSubCmd;
  value : string | null;
}

interface CreateCmd {
  main : "create";
  sub : CreateSubCmd;
  value : string | null;
}

interface HelpCmd{
  main : "help";
  sub : HelpSubCmd;
  value : string | null;
}

type Command = SearchCmd | CreateCmd | HelpCmd;

interface ICommandData {
  header : "ngc";
  command : Command;
  value : string | null;
}

type CreateSubCmd = "-m" | null;
type HelpSubCmd = "-d" | null;  
type SearchSubCmd = "-f" | "-g" | null;
