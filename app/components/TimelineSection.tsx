'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { timelineData } from '@/app/data/timeline'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'

const timeFilters = [
  { id: 'all', name: '전체' },
  { id: '2022-1', name: '2022 상반기' },
  { id: '2022-2', name: '2022 하반기' },
  { id: '2023-1', name: '2023 상반기' },
  { id: '2023-2', name: '2023 하반기' },
  { id: '2024-1', name: '2024 상반기' },
  { id: '2024-2', name: '2024 하반기' }
]

const categories = [
  { id: 'absurd-remarks', name: '망언', color: 'bg-red-500' },
  { id: 'livelihood', name: '민생 실패', color: 'bg-yellow-500' },
  { id: 'democracy', name: '민주주의 훼손', color: 'bg-purple-500' },
  { id: 'economy', name: '경제 실패', color: 'bg-blue-500' },
  { id: 'diplomacy', name: '외교 실패', color: 'bg-green-500' },
  { id: 'personnel', name: '인사 참사', color: 'bg-pink-500' },
  { id: 'corruption', name: '비리/부패', color: 'bg-orange-500' },
  { id: 'prosecution', name: '검찰공화국', color: 'bg-indigo-500' }
]

export default function TimelineSection() {
  const [selectedTime, setSelectedTime] = useState('all')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredData = timelineData.filter(item => {
    // 시기 필터링
    if (selectedTime !== 'all') {
      const [year, half] = selectedTime.split('-')
      const itemDate = new Date(item.date)
      const itemYear = itemDate.getFullYear().toString()
      const itemHalf = itemDate.getMonth() < 6 ? '1' : '2'
      
      if (itemYear !== year || itemHalf !== half) {
        return false
      }
    }

    // 카테고리 필터링
    if (selectedCategories.length > 0) {
      if (!item.category.some(cat => selectedCategories.includes(cat))) {
        return false
      }
    }

    // 검색어 필터링
    if (searchQuery) {
      return (
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return true
  })

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          윤석열 정부 2년 7개월의 기록
        </h2>

        {/* 검색 필터 - 돋보기 아이콘 추가 */}
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="검색하고 싶은 키워드를 적어주세요"
            className="text-black w-full max-w-md px-4 py-2 pl-10 rounded-lg border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* 시기 필터 - 모바일에서 숨김 */}
        <div className="hidden md:flex flex-wrap gap-2 mb-6">
          {timeFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedTime(filter.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTime === filter.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategories(prev =>
                  prev.includes(category.id)
                    ? prev.filter(id => id !== category.id)
                    : [...prev, category.id]
                )
              }}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                selectedCategories.includes(category.id)
                  ? `${category.color} text-white`
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className={`w-3 h-3 rounded-full ${category.color}`} />
              {category.name}
            </button>
          ))}
        </div>

        {/* 타임라인 */}
        <div className="relative border-l-2 border-gray-200 ml-4">
          {filteredData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 ml-8"
            >
              <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-[9px]" />
              <time className="text-sm text-gray-500 mb-1 block">
                {item.date}
              </time>
              <div className="flex gap-2 mb-2">
                {item.category.map(catId => {
                  const category = categories.find(c => c.id === catId)
                  return (
                    <span
                      key={catId}
                      className={`text-xs px-2 py-1 rounded-full ${category?.color} text-white`}
                    >
                      {category?.name}
                    </span>
                  )
                })}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4 whitespace-pre-wrap">
                {item.content}
              </p>
              {item.media && (
                <div className="mb-4 grid gap-4 grid-cols-2">
                  {item.media.map((media, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden">
                      {media.type === 'image' && (
                        <div className="relative h-48">
                          <Image
                            src={media.url}
                            alt={media.caption || ''}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      {media.caption && (
                        <p className="text-sm text-gray-500 mt-1">
                          {media.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-2 items-center">
                <a 
                  href={item.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  출처: {item.source.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}