import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import type { SectionName } from './types'

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75,
) => {
  const { setActiveSection, timeOfLastClicked } = useActiveSectionContext()
  const { ref, inView } = useInView({
    threshold,
  })

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClicked > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClicked, sectionName])

  return {
    ref,
  }
}
