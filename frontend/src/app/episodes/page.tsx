import Image from 'next/image';
import Link from 'next/link';

const episodes = [
  {
    id: 'ep1',
    title: '액션가면 vs 초코비맨',
    date: '2024.01.01',
    thumbnail: '/images/episodes/ep1.jpg',
    description: '짱구가 가장 좋아하는 액션가면과 초코비가 만났다! 과연 둘의 대결은 어떻게 될 것인가?',
    characters: ['짱구', '액션가면', '초코비맨'],
    rating: 4.9,
    tags: ['액션', '코미디', '음식']
  },
  {
    id: 'ep2',
    title: '떡잎마을 방범대 출동!',
    date: '2024.01.08',
    thumbnail: '/images/episodes/ep2.jpg',
    description: '떡잎마을에 수상한 사건이 발생! 떡잎마을 방범대가 나서서 사건을 해결한다.',
    characters: ['짱구', '유리', '철수', '훈이', '맹구'],
    rating: 4.8,
    tags: ['모험', '우정', '추리']
  },
  {
    id: 'ep3',
    title: '흰둥이를 찾아서',
    date: '2024.01.15',
    thumbnail: '/images/episodes/ep3.jpg',
    description: '흰둥이가 갑자기 사라졌다! 짱구와 친구들이 흰둥이를 찾아 떡잎마을을 수색하기 시작한다.',
    characters: ['짱구', '흰둥이', '유리', '철수'],
    rating: 4.7,
    tags: ['감동', '모험', '우정']
  },
  {
    id: 'ep4',
    title: '짱구 vs 부리부리 대마왕',
    date: '2024.01.22',
    thumbnail: '/images/episodes/ep4.jpg',
    description: '부리부리 대마왕이 떡잎마을을 위협한다! 짱구는 부리부리 대마왕에 맞서 싸울 수 있을까?',
    characters: ['짱구', '부리부리 대마왕', '액션가면'],
    rating: 5.0,
    tags: ['액션', '모험', '코미디']
  },
  {
    id: 'ep5',
    title: '엄마의 초콜렛을 지켜라!',
    date: '2024.01.29',
    thumbnail: '/images/episodes/ep5.jpg',
    description: '발렌타인 데이를 맞아 짱구 엄마가 특별한 초콜렛을 만들었다! 하지만 이를 노리는 수상한 그림자가...',
    characters: ['짱구', '짱구 엄마', '짱구 아빠'],
    rating: 4.6,
    tags: ['가족', '코미디', '음식']
  }
];

export default function EpisodesPage() {
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
              <Link href="/episodes" className="text-orange-600 font-semibold">에피소드</Link>
              <Link href="/quotes" className="text-gray-700 hover:text-orange-600 transition-colors">명대사</Link>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">갤러리</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">에피소드</h1>
          <p className="text-xl text-gray-600">
            짱구와 친구들의 재미있는 에피소드를 만나보세요!
          </p>
        </div>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {episodes.map((episode) => (
            <div key={episode.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {episode.id === 'ep1' && '🦸‍♂️'}
                  {episode.id === 'ep2' && '🚔'}
                  {episode.id === 'ep3' && '🐕'}
                  {episode.id === 'ep4' && '👾'}
                  {episode.id === 'ep5' && '🍫'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{episode.title}</h2>
                  <span className="text-sm text-gray-500">{episode.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{episode.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">등장인물</h3>
                  <div className="flex flex-wrap gap-2">
                    {episode.characters.map((character, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                      >
                        {character}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">태그</h3>
                  <div className="flex flex-wrap gap-2">
                    {episode.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl mr-1">⭐</span>
                    <span className="font-bold text-gray-800">{episode.rating}</span>
                  </div>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">인기 에피소드</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">이달의 에피소드</h3>
              <p className="text-gray-600">시청자가 뽑은 최고의 에피소드를 만나보세요</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">명장면 모음</h3>
              <p className="text-gray-600">잊을 수 없는 감동적인 장면들</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-semibold mb-2">실시간 인기</h3>
              <p className="text-gray-600">지금 가장 많이 보는 에피소드</p>
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