'use client'
import { useEffect, useState } from 'react'

// 타이핑 효과를 위한 커스텀 훅
function useTypewriter(text: string, speed: number = 200, delay: number = 1000) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false)
        timer = setTimeout(() => {}, delay)
      } else {
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1))
        }, speed / 2)
      }
    } else {
      if (displayText === text) {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, delay)
      } else {
        timer = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1))
        }, speed)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, text, speed, delay])

  return displayText
}

export default function VideoSection() {
  const typedText = useTypewriter('혐오의 대상들이 혐오로 이루어진 정권을 끌어내렸습니다', 150, 2000)

  return (
    <div className="relative h-full w-full bg-black">
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/president.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-60">
        <div className="h-full flex flex-col justify-center items-center text-white px-4">
          <p className="text-sm md:text-base mb-2 opacity-80">
            2024.12.14. 17시 30분
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            윤석열 대통령 탄핵
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center leading-relaxed h-8">
            {typedText}
          </p>
          
          <button 
            onClick={() => {
              document.getElementById('timeline')?.scrollIntoView({ 
                behavior: 'smooth' 
              })
            }}
            className="mt-8 px-8 py-3 bg-white text-black rounded-full
                     hover:bg-gray-200 transition-colors duration-300
                     flex items-center space-x-2"
          >
            <span>자세히 알아보기</span>
            <svg 
              className="w-5 h-5 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-4 right-4">
          <p className="text-white text-xs opacity-70">
            출처: 뉴스타파
          </p>
        </div>
      </div>
    </div>
  )
}