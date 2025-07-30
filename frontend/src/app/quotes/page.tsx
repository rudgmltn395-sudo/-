import Link from 'next/link';

type Character = '짱구' | '철수' | '유리' | '맹구' | '훈이' | '짱구 아빠' | '짱구 엄마';

interface Quote {
  id: string;
  character: Character;
  content: string;
  episode: string;
  context: string;
  likes: number;
  tags: string[];
}

const quotes: Quote[] = [
  {
    id: 'q1',
    character: '짱구',
    content: '이게 바로 나의 필살기! 엉덩이 춤이다~',
    episode: '액션가면 vs 초코비맨',
    context: '액션가면과 초코비맨의 싸움을 말리기 위해 짱구가 나선 장면',
    likes: 2840,
    tags: ['유머', '명장면', '액션']
  },
  {
    id: 'q2',
    character: '짱구',
    content: '시크하게 가자구~ 훗!',
    episode: '떡잎마을 방범대 출동!',
    context: '방범대 리더로서 멋진 모습을 보여주려는 장면',
    likes: 1922,
    tags: ['유머', '귀여움']
  },
  {
    id: 'q3',
    character: '철수',
    content: '짱구야... 너는 정말 대단한 친구야.',
    episode: '흰둥이를 찾아서',
    context: '흰둥이를 찾기 위해 밤늦게까지 함께 수색하는 장면',
    likes: 1755,
    tags: ['감동', '우정']
  },
  {
    id: 'q4',
    character: '유리',
    content: '어머나! 이게 뭔가요~?',
    episode: '엄마의 초콜렛을 지켜라!',
    context: '짱구 엄마의 특별한 초콜렛을 발견한 장면',
    likes: 1544,
    tags: ['유머', '귀여움']
  },
  {
    id: 'q5',
    character: '짱구 아빠',
    content: '이게 바로 진정한 떡잎마을 성인의 품격이란 거다.',
    episode: '아빠의 품격',
    context: '회사에서 있었던 일을 심각하게 이야기하는 장면',
    likes: 2103,
    tags: ['유머', '명언']
  },
  {
    id: 'q6',
    character: '짱구 엄마',
    content: '짱구야! 이 녀석아!',
    episode: '짱구의 장난',
    context: '짱구가 또 말썽을 피운 후의 장면',
    likes: 1832,
    tags: ['유머', '일상']
  },
  {
    id: 'q7',
    character: '맹구',
    content: '으... 으응...',
    episode: '맹구의 비밀',
    context: '평소처럼 조용히 대답하는 장면',
    likes: 1677,
    tags: ['유머', '귀여움']
  },
  {
    id: 'q8',
    character: '훈이',
    content: '이... 이걸 어떻게 하면 좋을까요?',
    episode: '떡잎마을 방범대 출동!',
    context: '위기 상황에서 겁에 질린 장면',
    likes: 1433,
    tags: ['유머', '귀여움']
  }
];

const characterColors: Record<Character, string> = {
  '짱구': 'orange',
  '철수': 'blue',
  '유리': 'pink',
  '맹구': 'purple',
  '훈이': 'green',
  '짱구 아빠': 'gray',
  '짱구 엄마': 'red'
};

const characterEmojis: Record<Character, string> = {
  '짱구': '👶',
  '철수': '👦',
  '유리': '👧',
  '맹구': '🧒',
  '훈이': '😰',
  '짱구 아빠': '👨',
  '짱구 엄마': '👩'
};

export default function QuotesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold text-orange-600 hover:text-orange-700">
                짱구 도감
              </Link>
              <span className="ml-2 text-sm text-gray-500">Crayon Shin-chan Encyclopedia</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/characters" className="text-gray-700 hover:text-orange-600 transition-colors">캐릭터</Link>
              <Link href="/episodes" className="text-gray-700 hover:text-orange-600 transition-colors">에피소드</Link>
              <Link href="/quotes" className="text-orange-600 font-semibold">명대사</Link>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">갤러리</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">명대사 모음</h1>
          <p className="text-xl text-gray-600">
            짱구와 친구들의 재미있고 감동적인 명대사를 만나보세요!
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote) => (
            <div key={quote.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-${characterColors[quote.character]}-500 p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-4xl mr-3">{characterEmojis[quote.character]}</span>
                    <div>
                      <h3 className="text-xl font-bold">{quote.character}</h3>
                      <p className="text-sm opacity-90">{quote.episode}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-1">❤️</span>
                    <span className="font-bold">{quote.likes.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-xl font-medium mb-2">&ldquo;{quote.content}&rdquo;</p>
                <p className="text-sm opacity-75">{quote.context}</p>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {quote.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">명대사 카테고리</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">😆</div>
              <h3 className="text-xl font-semibold mb-2">유머</h3>
              <p className="text-gray-600">웃음이 멈추지 않는 재미있는 명대사</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-semibold mb-2">감동</h3>
              <p className="text-gray-600">마음을 따뜻하게 하는 감동적인 대사</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-semibold mb-2">명언</h3>
              <p className="text-gray-600">인생의 교훈이 담긴 명언 모음</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💕</div>
              <h3 className="text-xl font-semibold mb-2">일상</h3>
              <p className="text-gray-600">소소한 일상 속 재미있는 대화</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2024 짱구 도감. 모든 권리는 원작자에게 있습니다.
          </p>
        </div>
      </footer>
    </div>
  );
} 