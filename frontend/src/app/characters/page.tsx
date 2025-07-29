import Link from 'next/link';

const characters = [
  {
    id: 'shinchan',
    name: '짱구',
    japaneseName: '노하라 신노스케',
    age: '5세',
    description: '장난꾸러기이지만 마음씨는 착한 아이',
    personality: ['장난꾸러기', '활발함', '먹보', '귀여움'],
    color: 'orange',
    emoji: '👶'
  },
  {
    id: 'nene',
    name: '유리',
    japaneseName: '사쿠라다 네네',
    age: '5세',
    description: '짱구의 첫사랑이자 예쁜 소녀',
    personality: ['예쁨', '귀여움', '장난꾸러기', '사교적'],
    color: 'pink',
    emoji: '👧'
  },
  {
    id: 'masao',
    name: '철수',
    japaneseName: '사토 마사오',
    age: '5세',
    description: '똑똑하고 착한 아이',
    personality: ['똑똑함', '착함', '성숙함', '보호자'],
    color: 'blue',
    emoji: '👦'
  },
  {
    id: 'kazu',
    name: '훈이',
    japaneseName: '보오',
    age: '5세',
    description: '겁이 많지만 친구를 아끼는 아이',
    personality: ['겁많음', '친구사랑', '착함', '소심함'],
    color: 'green',
    emoji: '😰'
  },
  {
    id: 'bo',
    name: '맹구',
    japaneseName: '사이토 토오루',
    age: '5세',
    description: '조용하지만 중요한 역할을 하는 아이',
    personality: ['조용함', '신중함', '착함', '믿음직함'],
    color: 'purple',
    emoji: '🤔'
  }
];

const colorClasses = {
  orange: 'bg-orange-500 hover:bg-orange-600',
  pink: 'bg-pink-500 hover:bg-pink-600',
  blue: 'bg-blue-500 hover:bg-blue-600',
  green: 'bg-green-500 hover:bg-green-600',
  purple: 'bg-purple-500 hover:bg-purple-600'
};

export default function CharactersPage() {
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
              <Link href="/characters" className="text-orange-600 font-semibold">캐릭터</Link>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">에피소드</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">명대사</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">갤러리</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">캐릭터 소개</h1>
          <p className="text-xl text-gray-600">
            짱구와 친구들의 상세한 정보를 확인해보세요!
          </p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <div key={character.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`${colorClasses[character.color as keyof typeof colorClasses]} h-64 flex items-center justify-center`}>
                <div className="text-white text-center">
                  <div className="text-8xl mb-4">{character.emoji}</div>
                  <h3 className="text-3xl font-bold mb-2">{character.name}</h3>
                  <p className="text-lg opacity-90">{character.japaneseName}</p>
                  <p className="text-sm opacity-75">{character.age}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-center">
                  {character.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">성격 특징</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.personality.map((trait, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/characters/${character.id}`}
                  className={`w-full ${colorClasses[character.color as keyof typeof colorClasses]} text-white py-3 px-4 rounded-lg text-center block transition-colors`}
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Characters Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">다른 캐릭터들</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-2">👨‍👩‍👧‍👦</div>
              <h3 className="font-semibold">노하라 가족</h3>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-2">👨‍🏫</div>
              <h3 className="font-semibold">선생님들</h3>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-2">👴👵</div>
              <h3 className="font-semibold">이웃들</h3>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-2">🐕</div>
              <h3 className="font-semibold">동물들</h3>
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