import StickyHeader from './components/StickyHeader'
import TopHeader from './components/TopSection'

export default function Header() {
  return (
    // 헤더 내부는 max-w-6xl 고정
    <>
      <TopHeader />
      <StickyHeader />
    </>
  )
}
