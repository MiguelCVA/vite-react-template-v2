import { Button } from '@/components/ui/button'
import { usePersistentState } from '@/hooks/usePersistentState'
import localforage from 'localforage'
import { Helmet } from 'react-helmet-async'
import { twMerge } from 'tailwind-merge'

export const Homepage = () => {
  const [number, setNumber] = usePersistentState(0, {
    persist: {
      key: 'persistent_example',
      storage: 'customStorage',
      customStorage: {
        getItem: (key) => localforage.getItem(key) as Promise<string | null>,
        setItem: async (key, value) => {
          await localforage.setItem(key, value)
        },
      },
    },
  })

  return (
    <>
      <Helmet title="Homepage" />
      <main className="grid grid-cols-1 font-mono md:grid-cols-2 md:p-10 ">
        <div
          className={twMerge([
            'border-b border-primary-foreground md:border-b-0 md:border-r',
            'p-5',
            'space-y-5',
          ])}
        >
          <div>
            <h2>Initial project template</h2>
            <h1
              className="text-3xl font-extrabold text-red-400"
            >
              REACT TEMPLATE V2
            </h1>
            <h2 className="text-sm">
              This project serves as a starting point for building modern web
              applications with the latest technologies.
            </h2>
          </div>
          <Button variant="secondary" asChild>
            <a href="https://github.com/MiguelCVA/vite-react-template-v2" target="_blank" rel="noreferrer">
              View in github
            </a>
          </Button>
        </div>

        <div className="space-y-3 p-5">
          <h1
            className="font-bold text-red-400 md:text-2xl"
          >
            using custom
            <span
              className={twMerge([
                'mx-5 p-1',
                'rounded border border-secondary-foreground',
                'bg-secondary',
              ])}
            >
              usePersistentState
            </span>
          </h1>
          <Button
            onClick={() => setNumber(number + 1)}
            variant="outline"
          >Number: {number}
          </Button>
        </div>
      </main>
    </>
  )
}
