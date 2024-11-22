import { cn } from '@/util'

interface TabItem {
  label: string
  value: string
}

interface TabsProps {
  tabs: TabItem[]
  onTabChange?: (value: string) => void
  activeTab: string
  setActiveTab: (value: string) => void
}

export default function TabList({
  tabs,
  onTabChange,
  activeTab,
  setActiveTab,
}: TabsProps) {
  const handleTabClick = (value: string) => {
    setActiveTab(value)
    onTabChange?.(value)
  }

  const activeIndex = tabs.findIndex((tab) => tab.value === activeTab)

  return (
    <div className="w-full">
      <div className="relative flex gap-23 w-full items-center border-b border-primary_foundation-10">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={cn(
              'relative py-4 text-16 text-center transition-colors',
              activeTab === tab.value
                ? 'text-accent-100'
                : 'text-primary_foundation-60',
            )}
          >
            {tab.label}
          </button>
        ))}

        <div
          className={cn(
            'absolute bottom-0 left-0 h-2 bg-accent-100 transition-transform duration-300 w-77',
            activeIndex === 0 && 'translate-x-0',
            activeIndex === 1 && 'translate-x-[94px]',
          )}
        />
      </div>
    </div>
  )
}
