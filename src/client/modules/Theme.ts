class Theme {
  __theme

  constructor(theme : TypeTheme){
    this.__theme = theme   
  }

  set Theme(value : TypeTheme){
    this.__theme = value;
  }

  get Theme(){
    return this.__theme;
  }
}

export const theme = new Theme("origin");

