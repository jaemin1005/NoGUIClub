import * as http from "http"

type ResMethod = (req : http.IncomingMessage, res : http.ServerResponse<http.IncomingMessage>) => void;

export let GetMethod : ResMethod = function(req, res) {
  
}
