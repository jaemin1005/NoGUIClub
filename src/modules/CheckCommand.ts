type Command = "search" | "create" | "help";
type SearchSubCommand = "-f" | "-g"

interface Cmd {
  header : "NOGUI"
  command : Command;
}