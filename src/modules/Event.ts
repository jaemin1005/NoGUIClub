export function KeyDownEvent(){
  const $commandText = document.getElementById("command-text")!;

  return function(event : KeyboardEvent){
    if(event.key.length === 1){
      $commandText.textContent += event.key;       
    }
  }
}

export function KeyEnterDownEvent(event: KeyboardEvent){
  if(event.key === "Enter"){

  }
}

export function KeyBackspaceEvent(){
  const $commadText = document.getElementById("command-text")!;

  return function(event: KeyboardEvent){
    if(event.key === "Backspace" && $commadText.textContent !== null){
        $commadText.textContent = $commadText.textContent.slice(0, -1);
    }
  }
}