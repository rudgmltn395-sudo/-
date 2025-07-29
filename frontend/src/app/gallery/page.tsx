import Link from 'next/link';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video';
  thumbnail: string;
  category: string;
  tags: string[];
  likes: number;
  views: number;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: '짱구의 엉덩이 춤',
    description: '짱구의 트레이드마크! 귀여운 엉덩이 춤 모음',
    type: 'video',
    thumbnail: '/images/gallery/dance.jpg',
    category: '명장면',
    tags: ['댄스', '코미디', '짱구'],
    likes: 5240,
    views: 12500
  },
  {
    id: 'g2',
    title: '떡잎마을 방범대',
    description: '우리 마을은 우리가 지킨다! 떡잎마을 방범대의 활약상',
    type: 'image',
    thumbnail: '/images/gallery/defense-force.jpg',
    category: '단체사진',
    tags: ['우정', '액션', '모험'],
    likes: 4180,
    views: 9800
  },
  {
    id: 'g3',
    title: '액션가면 변신 장면',
    description: '정의의 히어로! 액션가면의 멋진 변신 장면',
    type: 'video',
    thumbnail: '/images/gallery/action-mask.jpg',
    category: '명장면',
    tags: ['액션', '히어로', '변신'],
    likes: 3950,
    views: 8700
  },
  {
    id: 'g4',
    title: '짱구와 흰둥이',
    description: '가장 친한 친구 흰둥이와의 특별한 순간들',
    type: 'image',
    thumbnail: '/images/gallery/shiro.jpg',
    category: '일상',
    tags: ['반려동물', '우정', '감동'],
    likes: 4720,
    views: 11200
  },
  {
    id: 'g5',
    title: '초코비 먹방',
    description: '짱구의 최애 과자! 초코비 먹방 모음',
    type: 'video',
    thumbnail: '/images/gallery/chocobi.jpg',
    category: '먹방',
    tags: ['음식', '코미디', '일상'],
    likes: 3850,
    views: 9100
  },
  {
    id: 'g6',
    title: '짱구 가족 여행',
    description: '노하라 가족의 즐거운 여행 순간들',
    type: 'image',
    thumbnail: '/images/gallery/family-trip.jpg',
    category: '가족',
    tags: ['여행', '가족', '추억'],
    likes: 4150,
    views: 9800
  }
];

const categories = [
  { name: '전체', icon: '🎬' },
  { name: '명장면', icon: '⭐' },
  { name: '일상', icon: '📸' },
  { name: '가족', icon: '👨‍👩‍👦' },
  { name: '우정', icon: '🤝' },
  { name: '먹방', icon: '🍫' }
];

export default function GalleryPage() {
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
              <Link href="/quotes" className="text-gray-700 hover:text-orange-600 transition-colors">명대사</Link>
              <Link href="/gallery" className="text-orange-600 font-semibold">갤러리</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">갤러리</h1>
          <p className="text-xl text-gray-600">
            짱구와 친구들의 특별한 순간들을 만나보세요!
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-lg p-2">
            <div className="flex space-x-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-6 py-3 rounded-lg hover:bg-orange-100 transition-colors flex items-center space-x-2"
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  {item.type === 'video' ? (
                    <>
                      <span className="mr-2">🎥</span>
                      동영상
                    </>
                  ) : (
                    <>
                      <span className="mr-2">📷</span>
                      사진
                    </>
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {item.category === '명장면' && '🎬'}
                  {item.category === '단체사진' && '👥'}
                  {item.category === '일상' && '📸'}
                  {item.category === '먹방' && '🍫'}
                  {item.category === '가족' && '👨‍👩‍👦'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <span className="text-red-500 mr-1">❤️</span>
                      {item.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <span className="text-gray-400 mr-1">👁️</span>
                      {item.views.toLocaleString()}
                    </span>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">인기 콘텐츠</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">이달의 베스트</h3>
              <p className="text-gray-600">가장 많은 사랑을 받은 콘텐츠</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold mb-2">추천 영상</h3>
              <p className="text-gray-600">놓치면 안 되는 명장면 모음</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">포토 갤러리</h3>
              <p className="text-gray-600">특별한 순간을 담은 사진들</p>
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