import { useIsomorphicLayoutEffect } from 'swr/_internal'

export function useDocumentTitle(title: string = 'World Ranks') {
    useIsomorphicLayoutEffect(() => {
        document.title = title
    }, [title])
}
