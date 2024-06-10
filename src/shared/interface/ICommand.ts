interface SearchCmd {
  main : "search";
  sub : SearchSubCmd;
}

interface CreateCmd {
  main : "create";
  sub : CreateSubCmd;
}

interface HelpCmd{
  main : "help";
  sub : HelpSubCmd;
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
