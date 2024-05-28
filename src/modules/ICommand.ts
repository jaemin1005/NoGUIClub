interface SearchCmd {
  command : "search";
  subCommand : "-f" | "-g" | null;
}

interface CreateCmd {
  command : "create";
  subCommand? : "-m" | null;
}

interface HelpCmd{
  command : "help";
  subCommand? : "-d" | null;
}

type Command = SearchCmd | CreateCmd | HelpCmd;

interface ReqData {
  header : "ngc";
  command : Command;
  value : string | null;
}
