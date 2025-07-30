"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const characters = [
  {
    id: 'shinchan',
    name: '짱구',
    japaneseName: '野原しんのすけ (노하라 신노스케)',
    age: '5세',
    description: '떡잎유치원에 다니는 5살 아이. 엉덩이춤과 장난을 좋아하며, 예쁜 누나들에게 관심이 많다. 부모님을 골탕 먹이는 것을 좋아하지만, 가족을 매우 사랑한다.',
    personality: ['장난꾸러기', '활발함', '먹보', '귀여움', '엉뚱함'],
    color: 'orange',
    imagePath: '/images/characters/짱구.jpg',
    features: ['액션가면 마니아', '초코비 애호가', '엉덩이춤의 달인']
  },
  {
    id: 'nene',
    name: '유리',
    japaneseName: '櫻田ネネ (사쿠라다 네네)',
    age: '5세',
    description: '짱구의 반 친구. 어른스러운 성격이지만 때로는 짱구보다 더 심한 장난을 치기도 한다. 부잣집 외동딸로 공주병이 있다.',
    personality: ['어른스러움', '귀여움', '장난꾸러기', '사교적', '공주병'],
    color: 'pink',
    imagePath: '/images/characters/유리.jpg',
    features: ['인형놀이 전문가', '리더십 있음', '완벽주의자']
  },
  {
    id: 'masao',
    name: '철수',
    japaneseName: '佐藤マサオ (사토 마사오)',
    age: '5세',
    description: '짱구의 가장 친한 친구. 겁이 많고 소심한 성격이지만 책임감이 강하다. 짱구와는 달리 공부를 잘하고 착실하다.',
    personality: ['똑똑함', '착함', '소심함', '책임감'],
    color: 'blue',
    imagePath: '/images/characters/철수.webp',
    features: ['공부를 잘함', '안경잡이', '엄마바보']
  },
  {
    id: 'kazama',
    name: '훈이',
    japaneseName: '風間トオル (카자마 토오루)',
    age: '5세',
    description: '반에서 가장 똑똑하고 어른스러운 아이. 부자집 아들이며 매사에 진지하다. 짱구를 못마땅해하지만 실제로는 좋은 친구다.',
    personality: ['똑똑함', '진지함', '어른스러움', '완벽주의'],
    color: 'green',
    imagePath: '/images/characters/훈이.webp',
    features: ['천재적 두뇌', '검도 실력자', '완벽주의자']
  },
  {
    id: 'bo',
    name: '맹구',
    japaneseName: '齋藤ボー (사이토 보)',
    age: '5세',
    description: '조용하고 마이페이스인 아이. 항상 코를 파고 있으며 느긋한 성격이다. 의외로 운동신경이 좋고 숨겨진 재능이 많다.',
    personality: ['조용함', '마이페이스', '느긋함', '신비로움'],
    color: 'purple',
    imagePath: '/images/characters/맹구.jpg',
    features: ['코파기 장인', '운동신경 좋음', '마이페이스']
  },
  {
    id: 'ai',
    name: '흰둥이',
    japaneseName: 'シロ (시로)',
    age: '?',
    description: '짱구네 집 강아지. 영리하고 충실한 성격이며, 때로는 가족들보다 더 어른스럽게 행동한다. 짱구와 함께 자주 모험을 한다.',
    personality: ['영리함', '충실함', '어른스러움', '용감함'],
    color: 'gray',
    imagePath: '/images/characters/흰둥이.webp',
    features: ['수영 고수', '영리한 두뇌', '가족 사랑']
  }
];

export default function Home() {
  const [apiMessage, setApiMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchApiMessage = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:8000/api/hello/');
        const data = await response.json();
        setApiMessage(data.message);
      } catch (error) {
        console.error('API 호출 오류:', error);
        setApiMessage("API 서버에 연결할 수 없습니다. 로컬 서버가 실행 중인지 확인해주세요.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchApiMessage();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">
                짱구는 못말려
              </Link>
              <span className="ml-2 text-sm text-gray-500">Crayon Shin-chan Encyclopedia</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/characters" className="text-gray-700 hover:text-orange-600 transition-colors">캐릭터</a>
              <a href="/episodes" className="text-gray-700 hover:text-orange-600 transition-colors">에피소드</a>
              <a href="/quotes" className="text-gray-700 hover:text-orange-600 transition-colors">명대사</a>
              <a href="/gallery" className="text-gray-700 hover:text-orange-600 transition-colors">갤러리</a>
            </nav>
          </div>
        </div>
      </header>

      {/* API Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">API 서버 상태</h3>
          {isLoading ? (
            <p className="text-blue-600">API 서버에 연결 중...</p>
          ) : (
            <p className="text-gray-700">{apiMessage}</p>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            짱구와 함께하는 
            <span className="text-orange-500">즐거운 여행</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            짱구, 유리, 철수, 훈이, 맹구와 함께하는 웃음 가득한 이야기들을 만나보세요!
          </p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {characters.map((character) => (
            <div key={character.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-${character.color}-500 h-64 relative overflow-hidden`}>
                <img
                  src={character.imagePath}
                  alt={character.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{character.name}</h3>
                  <p className="text-sm opacity-90">{character.japaneseName}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{character.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {character.personality.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">특징:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {character.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-orange-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">도감의 특징</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h4 className="text-xl font-semibold mb-2">캐릭터 소개</h4>
              <p className="text-gray-600">모든 캐릭터들의 상세한 정보와 특징을 확인하세요</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📺</div>
              <h4 className="text-xl font-semibold mb-2">에피소드 모음</h4>
              <p className="text-gray-600">유명한 에피소드들과 재미있는 장면들을 만나보세요</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-xl font-semibold mb-2">명대사 컬렉션</h4>
              <p className="text-gray-600">짱구와 친구들의 유명한 명대사들을 모아봤어요</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2024 짱구 도감. 모든 권리는 원작자에게 있습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
