import VideoSection from './components/VideoSection'
import TimelineSection from './components/TimelineSection'
import PoliticiansSection from './components/PoliticiansSection'

export default function Home() {
  return (
    <main className="w-full">
      {/* 첫 번째 섹션: 비디오 섹션 */}
      <section className="h-screen relative">
        <VideoSection />
      </section>

      {/* 두 번째 섹션: 타임라인 */}
      <section id="timeline" className="min-h-screen bg-gray-50">
        <TimelineSection />
      </section>

      {/* 세 번째 섹션: 국회의원 박제 */}
      <section className="min-h-screen bg-white">
        <PoliticiansSection />
      </section>
    </main>
  )
}