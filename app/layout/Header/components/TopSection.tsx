import ControlPanel from './ControlPanel'
import Logo from './Logo'

export default function TopSection() {
  return (
    <section className="w-full h-[52px]">
      <div className="max-w-6xl h-full m-auto px-10 flex items-center justify-between">
        <Logo />
        <ControlPanel />
      </div>
    </section>
  )
}
