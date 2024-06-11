/** 키워드 분류하기 */
export function GetKeywords(arrStr : string[]) : string[] { 
  const keywords : {[keywords : string ] : number} = {};

  for(const line of arrStr){
    //* 특수문자제거, 소문자로 변경 :)
    const cleanedText = line.replace(/[^\w\s가-힣]/g, '').toLowerCase();
    const words = cleanedText.split(/\s+/);

    for(const word of words){
      if(!keywords[word]) keywords[word] = 0;
      keywords[word]++;
    }
  }

  //* 키워드 호출에 따른, 내림차순으로 분류하기.
  return Object.entries(keywords)
    //* 값 만을 가지고와서 분류한다.
    .sort(([, a], [, b]) => b - a)
    //* 상위 10개까지 가져온다.
    .slice(0, 10)
    //* key값을 가지고 배열로 만든다.
    .map(([word]) => word);
}


//console.log(GetKeywords(["나는 아름다운 나비, 날개를 활짝펴고 세상을 자유롭게 날꺼야, 노래하며 춤추는 나는 아름다운 나비 아름다운 아름다운 아름다운 아름다운"]));