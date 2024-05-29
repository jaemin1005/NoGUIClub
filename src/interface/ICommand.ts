interface SearchCmd {
  command : "search";
  subCommand : SearchSubCmd;
}

interface CreateCmd {
  command : "create";
  subCommand : CreateSubCmd;
}

interface HelpCmd{
  command : "help";
  subCommand : HelpSubCmd;
}

type Command = SearchCmd | CreateCmd | HelpCmd;

interface ReqData {
  header : "ngc";
  command : Command;
  value : string | null;
}

type CreateSubCmd = "-m" | null;
type HelpSubCmd = "-d" | null;  
type SearchSubCmd = "-f" | "-g" | null;
