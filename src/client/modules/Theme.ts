class Theme {
  __theme

  constructor(theme : Theme){
    this.__theme = theme   
  }

  set Theme(value : Theme){
    this.__theme = value;
  }

  get Theme(){
    return this.__theme;
  }
}

export const theme = new Theme("origin");

