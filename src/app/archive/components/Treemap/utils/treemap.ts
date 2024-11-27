import { KeywordsPerSummary } from '../../api/types'

export const calculateKeywordsTwo = (
  CONTAINER_HEIGHT: number,
  CONTAINER_WIDTH: number,
  MIN_HEIGHT: number,
  sortedKeywords: KeywordsPerSummary[],
  totalActivity: number,
) => {
  let smaller = Math.floor(
    (CONTAINER_HEIGHT * sortedKeywords[1].activityCount) / totalActivity,
  )
  let heights = [
    Math.floor(
      (CONTAINER_HEIGHT * sortedKeywords[0].activityCount) / totalActivity,
    ),
    Math.floor(
      (CONTAINER_HEIGHT * sortedKeywords[1].activityCount) / totalActivity,
    ),
  ]

  if (smaller < MIN_HEIGHT) {
    heights = [
      Math.floor(
        (CONTAINER_HEIGHT * sortedKeywords[0].activityCount) / totalActivity -
          (MIN_HEIGHT - smaller),
      ),
      MIN_HEIGHT,
    ]
  }

  return sortedKeywords.map((item, index) => ({
    width: CONTAINER_WIDTH,
    height: heights[index],
    item,
  }))
}

export const calculateKeywordsThree = (
  CONTAINER_HEIGHT: number,
  CONTAINER_WIDTH: number,
  MIN_HEIGHT: number,
  MIN_WIDTH: number,
  PADDING: number,
  sortedKeywords: KeywordsPerSummary[],
  totalActivity: number,
) => {
  let overHeight = Math.floor(
    (CONTAINER_HEIGHT * sortedKeywords[0].activityCount) / totalActivity,
  )

  let underHeight: number = CONTAINER_HEIGHT - overHeight - PADDING

  if (MIN_HEIGHT > underHeight) {
    overHeight -= MIN_HEIGHT - underHeight
    underHeight = MIN_HEIGHT
  }

  const sumUnderKeywords =
    sortedKeywords[1].activityCount + sortedKeywords[2].activityCount
  const smallestKeyword = Math.floor(
    (CONTAINER_WIDTH * sortedKeywords[2].activityCount) / sumUnderKeywords,
  )

  let widths = [
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[1].activityCount) / sumUnderKeywords,
    ),
    smallestKeyword,
  ]

  if (MIN_WIDTH > smallestKeyword) {
    widths = [
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[1].activityCount) / sumUnderKeywords,
      ) -
        (MIN_WIDTH -
          Math.floor(
            (CONTAINER_WIDTH * sortedKeywords[2].activityCount) /
              sumUnderKeywords,
          )),
      MIN_WIDTH,
    ]
  }

  return [
    {
      width: CONTAINER_WIDTH,
      height: overHeight,
      item: sortedKeywords[0],
    },
    ...sortedKeywords.slice(1).map((item, index) => ({
      width: widths[index] - PADDING,
      height: underHeight,
      item,
    })),
  ]
}

export const calculateKeywordsFour = (
  CONTAINER_HEIGHT: number,
  CONTAINER_WIDTH: number,
  MIN_HEIGHT: number,
  MIN_WIDTH: number,
  PADDING: number,
  sortedKeywords: KeywordsPerSummary[],
  totalActivity: number,
) => {
  const sumOverKeyWords =
    sortedKeywords[0].activityCount + sortedKeywords[1].activityCount
  const sumUnderKeyWords =
    sortedKeywords[2].activityCount + sortedKeywords[3].activityCount

  const smallestKeywordWidth = Math.floor(
    (CONTAINER_WIDTH * sortedKeywords[3].activityCount) / sumUnderKeyWords,
  )

  let widths = [
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[0].activityCount) / sumOverKeyWords,
    ),
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[1].activityCount) / sumOverKeyWords,
    ),
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[2].activityCount) / sumUnderKeyWords,
    ),
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[3].activityCount) / sumUnderKeyWords,
    ),
  ]

  if (MIN_WIDTH > smallestKeywordWidth) {
    widths = [
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[0].activityCount) / sumOverKeyWords,
      ),
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[1].activityCount) / sumOverKeyWords,
      ),
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[2].activityCount) / sumUnderKeyWords,
      ) -
        (MIN_WIDTH - smallestKeywordWidth),
      MIN_WIDTH,
    ]
  }

  let overHeight = Math.floor(
    (CONTAINER_HEIGHT *
      (sortedKeywords[0].activityCount + sortedKeywords[1].activityCount)) /
      totalActivity,
  )
  let underHeight = CONTAINER_HEIGHT - overHeight

  if (MIN_HEIGHT > underHeight) {
    overHeight -= MIN_HEIGHT - underHeight
    underHeight = MIN_HEIGHT
  }

  return sortedKeywords.map((item, index) => ({
    width: widths[index] - PADDING,
    height: index < 2 ? overHeight : underHeight,
    item,
  }))
}

export const calculateKeywordsFive = (
  CONTAINER_HEIGHT: number,
  CONTAINER_WIDTH: number,
  MIN_HEIGHT: number,
  MIN_WIDTH: number,
  PADDING: number,
  sortedKeywords: KeywordsPerSummary[],
  totalActivity: number,
) => {
  let overHeight = Math.floor(
    (CONTAINER_HEIGHT *
      (sortedKeywords[0].activityCount + sortedKeywords[1].activityCount)) /
      totalActivity,
  )
  let underHeight = CONTAINER_HEIGHT - overHeight

  if (MIN_HEIGHT > underHeight) {
    overHeight -= MIN_HEIGHT - underHeight
    underHeight = MIN_HEIGHT
  }

  const sumOverKeywords =
    sortedKeywords[0].activityCount + sortedKeywords[1].activityCount
  const sumUnderKeywords =
    sortedKeywords[2].activityCount +
    sortedKeywords[3].activityCount +
    sortedKeywords[4].activityCount
  const smallestKeywordWidth = Math.floor(
    (CONTAINER_WIDTH * sortedKeywords[4].activityCount) / sumUnderKeywords,
  )

  const topWidths = [
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[0].activityCount) / sumOverKeywords,
    ),
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[1].activityCount) / sumOverKeywords,
    ),
  ]
  let bottomWidths = [
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[2].activityCount) / sumUnderKeywords,
    ),
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[3].activityCount) / sumUnderKeywords,
    ),
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[4].activityCount) / sumUnderKeywords,
    ),
  ]

  if (MIN_WIDTH > smallestKeywordWidth) {
    bottomWidths = [
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[2].activityCount) / sumUnderKeywords,
      ),
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[3].activityCount) / sumUnderKeywords,
      ) -
        (MIN_WIDTH - smallestKeywordWidth),
      MIN_WIDTH,
    ]
  }

  return [
    ...sortedKeywords.slice(0, 2).map((item, index) => ({
      width: topWidths[index] - PADDING,
      height: overHeight,
      item,
    })),
    ...sortedKeywords.slice(2).map((item, index) => ({
      width: bottomWidths[index] - PADDING,
      height: underHeight,
      item,
    })),
  ]
}

export const calculateKeywordsSix = (
  CONTAINER_HEIGHT: number,
  CONTAINER_WIDTH: number,
  MIN_HEIGHT: number,
  MIN_WIDTH: number,
  PADDING: number,
  sortedKeywords: KeywordsPerSummary[],
  totalActivity: number,
) => {
  let overHeight = Math.floor(
    (CONTAINER_HEIGHT *
      (sortedKeywords[0].activityCount +
        sortedKeywords[1].activityCount +
        sortedKeywords[2].activityCount)) /
      totalActivity,
  )
  let underHeight = CONTAINER_HEIGHT - overHeight

  if (MIN_HEIGHT > underHeight) {
    overHeight -= MIN_HEIGHT - underHeight
    underHeight = MIN_HEIGHT
  }

  const sumOverKeywords =
    sortedKeywords[0].activityCount +
    sortedKeywords[1].activityCount +
    sortedKeywords[2].activityCount
  const sumUnderKeywords =
    sortedKeywords[3].activityCount +
    sortedKeywords[4].activityCount +
    sortedKeywords[5].activityCount

  const underSmallestKeywordWidth = Math.floor(
    (CONTAINER_WIDTH * sortedKeywords[5].activityCount) / sumUnderKeywords,
  )
  const overSmallestKeywordWidth = Math.floor(
    (CONTAINER_WIDTH * sortedKeywords[2].activityCount) / sumOverKeywords,
  )

  let widths = [
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[0].activityCount) / sumOverKeywords,
    ),
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[1].activityCount) / sumOverKeywords,
    ),
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[2].activityCount) / sumOverKeywords,
    ),
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[3].activityCount) / sumUnderKeywords,
    ),
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[4].activityCount) / sumUnderKeywords,
    ),
    Math.floor(
      (CONTAINER_WIDTH * sortedKeywords[5].activityCount) / sumUnderKeywords,
    ),
  ]

  if (MIN_WIDTH > overSmallestKeywordWidth) {
    widths = [
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[0].activityCount) / sumOverKeywords,
      ),
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[1].activityCount) / sumOverKeywords,
      ) -
        (MIN_WIDTH - overSmallestKeywordWidth),
      overSmallestKeywordWidth,
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[3].activityCount) / sumUnderKeywords,
      ),
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[4].activityCount) / sumUnderKeywords,
      ),
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[5].activityCount) / sumUnderKeywords,
      ),
    ]
  }

  if (MIN_WIDTH > underSmallestKeywordWidth) {
    widths = [
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[0].activityCount) / sumOverKeywords,
      ),
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[1].activityCount) / sumOverKeywords,
      ),
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[2].activityCount) / sumOverKeywords,
      ),
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[3].activityCount) / sumUnderKeywords,
      ),
      Math.floor(
        (CONTAINER_WIDTH * sortedKeywords[4].activityCount) / sumUnderKeywords,
      ) -
        (MIN_WIDTH - underSmallestKeywordWidth),
      MIN_WIDTH,
    ]
  }

  return sortedKeywords.map((item, index) => ({
    width: widths[index] - PADDING,
    height: index < 3 ? overHeight : underHeight,
    item,
  }))
}
