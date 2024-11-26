'use client'

import { KeywordsDataForTreemap } from './types'
import {
  calculateKeywordsTwo,
  calculateKeywordsThree,
  calculateKeywordsFour,
  calculateKeywordsFive,
  calculateKeywordsSix,
} from './utils/treemap'

const transKeyword = (keyword: string) => {
  switch (keyword) {
    case 'ENTERTAINMENT':
      return '엔터테인먼트'
    case 'CULTURE_ART':
      return '문화/예술'
    case 'HEALTH':
      return '건강'
    case 'RELAXATION':
      return '휴식'
    case 'SELF_DEVELOPMENT':
      return '자기개발'
    case 'SOCIAL':
      return '소셜'
    default:
      return '자연'
  }
}

export default function TreemapChart({
  monthlySavedTimeAndActivityCount,
  activitiesByKeywordSummary,
}: KeywordsDataForTreemap) {
  const CONTAINER_WIDTH = 340
  const CONTAINER_HEIGHT = 340
  const PADDING = 2
  const MIN_HEIGHT = 70
  const MIN_WIDTH = 90
  const totalActivity =
    monthlySavedTimeAndActivityCount.monthlyTotalActivityCount

  const layouts = (() => {
    const sortedKeywords = activitiesByKeywordSummary.sort(
      (a, b) => b.activityCount - a.activityCount,
    )
    const totalKeywords = sortedKeywords.length

    switch (totalKeywords) {
      case 1:
        return [
          {
            width: CONTAINER_WIDTH,
            height: CONTAINER_HEIGHT,
            item: sortedKeywords[0],
          },
        ]
      case 2:
        return calculateKeywordsTwo(
          CONTAINER_WIDTH,
          CONTAINER_HEIGHT,
          MIN_HEIGHT,
          sortedKeywords,
          totalActivity,
        )
      case 3:
        return calculateKeywordsThree(
          CONTAINER_HEIGHT,
          CONTAINER_WIDTH,
          MIN_HEIGHT,
          MIN_WIDTH,
          PADDING,
          sortedKeywords,
          totalActivity,
        )
      case 4:
        return calculateKeywordsFour(
          CONTAINER_HEIGHT,
          CONTAINER_WIDTH,
          MIN_HEIGHT,
          MIN_WIDTH,
          PADDING,
          sortedKeywords,
          totalActivity,
        )
      case 5:
        return calculateKeywordsFive(
          CONTAINER_HEIGHT,
          CONTAINER_WIDTH,
          MIN_HEIGHT,
          MIN_WIDTH,
          PADDING,
          sortedKeywords,
          totalActivity,
        )
      case 6:
        return calculateKeywordsSix(
          CONTAINER_HEIGHT,
          CONTAINER_WIDTH,
          MIN_HEIGHT,
          MIN_WIDTH,
          PADDING,
          sortedKeywords,
          totalActivity,
        )
      default:
        return []
    }
  })()

  return (
    <div className="w-345 h-345 mx-auto flex flex-wrap gap-4 rounded-12">
      {layouts.map(({ width, height, item }, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${item.keyword.image})`,
          }}
          className={`w-${width} h-${height} flex items-center justify-center font-bold bg-primary_foundation-100 rounded-12 bg-contain bg-center bg-no-repeat overflow-hidden`}
        >
          <span className="font-pretendard font-semibold text-white text-20">
            {transKeyword(item.keyword.category)}
          </span>
        </div>
      ))}
    </div>
  )
}

// 'use client'

// import { KeywordsDataForTreemap } from './types'

// const transKeyword = (keyword: string) => {
//   switch (keyword) {
//     case 'ENTERTAINMENT':
//       return '엔터테인먼트'
//     case 'CULTURE_ART':
//       return '문화/예술'
//     case 'HEALTH':
//       return '건강'
//     case 'RELAXATION':
//       return '휴식'
//     case 'SELF_DEVELOPMENT':
//       return '자기개발'
//     case 'SOCIAL':
//       return '소셜'
//     default:
//       return '자연'
//   }
// }

// export default function TreemapChart({
//   monthlySavedTimeAndActivityCount,
//   activitiesByKeywordSummary,
// }: KeywordsDataForTreemap) {
//   const totalActivity =
//     monthlySavedTimeAndActivityCount.monthlyTotalActivityCount

//   const MIN_WIDTH = 80
//   const MIN_HEIGHT = 70
//   const CONTAINER_WIDTH = 340
//   const CONTAINER_HEIGHT = 340

//   const calculateLayout = () => {
//     let currentX = 0
//     let currentY = 0
//     let remainingWidth = CONTAINER_WIDTH
//     let remainingHeight = CONTAINER_HEIGHT
//     let order = 1

//     return activitiesByKeywordSummary.map((item) => {
//       const ratio = item.activityCount / totalActivity
//       const area = ratio * CONTAINER_WIDTH * CONTAINER_HEIGHT

//       let width = remainingWidth
//       let height = area / width

//       if (height < MIN_HEIGHT) {
//         height = MIN_HEIGHT
//         width = Math.max(area / height, MIN_WIDTH)
//       }

//       if (width < MIN_WIDTH) {
//         width = MIN_WIDTH
//         height = Math.max(area / width, MIN_HEIGHT)
//       }

//       const layout = {
//         order: order,
//         x: currentX,
//         y: currentY,
//         width: Math.min(width, remainingWidth),
//         height: Math.min(height, remainingHeight),
//       }

//       order += 1
//       currentX += layout.width

//       if (currentX >= CONTAINER_WIDTH) {
//         currentX = 0
//         currentY += layout.height
//         remainingWidth = CONTAINER_WIDTH
//         remainingHeight -= layout.height
//       } else {
//         remainingWidth -= layout.width
//       }

//       if (remainingHeight < MIN_HEIGHT) {
//         remainingHeight = MIN_HEIGHT
//       }

//       return {
//         ...layout,
//         item,
//       }
//     })
//   }

//   const layouts = calculateLayout()

//   return (
//     <div className="w-full">
//       <div className="relative w-342 h-342 mx-auto">
//         {layouts.map(({ order, x, y, width, height, item }) => {
//           return (
//             <div
//               key={order}
//               style={{
//                 left: `${x}px`,
//                 top: `${y}px`,
//                 width: `${width}px`,
//                 height: `${height}px`,
//                 backgroundImage: `url(${item.keyword.image})`,
//               }}
//               className="absolute flex items-center justify-center bg-contain bg-center bg-no-repeat bg-primary_foundation-100 rounded-12"
//             >
//               <span className=" font-pretendard text-white font-semibold test-16">
//                 {transKeyword(item.keyword.category)}
//               </span>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
