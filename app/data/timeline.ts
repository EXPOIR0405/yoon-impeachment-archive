export interface TimelineItem {
    id: string;
    date: string;
    title: string;
    content: string;
    category: string[];
    source: {
      name: string;
      url: string;
    };
    media?: {
      type: 'image' | 'video';
      url: string;
      caption?: string;
    }[];
  }
  
  export const timelineData: TimelineItem[] = [
    {
      id: "1",
      date: "2021.12.15",
      title: "시간강사는 서류보고 뽑는 게 아니다.",
      content: "겸임교수라는 건 시간강사에요. 채용 비리 이러는데, (시간강사는) 이런 자료 보고 뽑는 게 아닙니다. 그 현실을 좀 잘 보시라고요. 배우자 김건희씨를 둘러싼 '허위 이력' 의혹에 관한 질문을 받은 윤석열 국민의힘 대선 후보는 말리는 측근들을 뿌리치고 적극 답변에 나섰다. 윤 후보는 15일 오전 서울 영등포구 국민의힘 당사에 들어오던 중 취재진으로부터 '배우자 관련 여러 의혹이 나오는데 (어떻게 생각하나)'라는 질문을 받고 이같이 말했다.",
      category: ["absurd-remarks"],
      source: {
        name: "오마이뉴스",
        url: "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0002795315"
      }
    },
    {
      id: "2",
      date: "2022.01.11",
      title: "북한 핵 미사일 조짐 보일 땐 선제타격",
      content: "11일 열린 신년 기자회견, 윤 후보의 입에서는 '선제 타격'이라는 위험천만한 발언이 나왔다. 북한의 미사일 위협을 방지하는 방안을 답하는 과정에서다. 윤 후보는 '마하 5 이상의 미사일에 만약 핵을 탑재했다면 수도권에 도달해서 대량 살상하는데 걸리는 시간은 1분 이내다. 요격이 사실상 불가능하다'며 '그러면 그 조짐이 보일 때 소위 3축 체제의 제일 앞에 있는 킬체인(Kill Chain)이라는 선제타격 밖에는 막을 수 있는 방법이 없다'고 말했다.",
      category: ["absurd-remarks", "diplomacy"],
      source: {
        name: "민중의소리",
        url: "https://www.vop.co.kr/A00001607583.html"
      }
    },
    // ... 더 많은 데이터
].sort((a, b) => {
  return a.date.localeCompare(b.date);
});