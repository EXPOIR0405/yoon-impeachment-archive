export default function PoliticiansSection() {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-black font-bold mb-4">
            옹호했던 국회의원들
          </h2>
          <p className="text-xl text-gray-600">
            역사에 기록될 그들의 발언과 행적
          </p>
        </div>
  
        {/* 국회의원 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 여기에 국회의원 카드들이 들어갑니다 */}
        </div>
      </div>
    )
  }