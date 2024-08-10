/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @stylistic/max-len */
import { useState as useReactState, type Dispatch, type SetStateAction, useEffect } from 'react'

interface IOptions {
  persist?: {
    storage: 'localStorage' | 'cookies' | 'sessionStorage' | 'customStorage';
    key: string;
    customStorage?: {
      getItem: (key: string) => Promise<string | null> | string | null;
      setItem: (key: string, value: string) => Promise<void> | void;
    };
  };
}

/**
 * Provides a stateful value along with a function for updating it and a method for persisting the state using localStorage, cookies, sessionStorage, or a custom storage.
 *
 * @version 1.1.0
 * @author OLIXY <https://github.com/MiguelCVA>
 * @param {T} initialState - The initial value to set for the state.
 * @param {IOptions} [options] - Configuration options for state persistence.
 * @returns {[T, Dispatch<SetStateAction<T>>]} An array containing the current state value and a function to update the state.
 */
export function usePersistentState<T>(initialState: T, options?: IOptions): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useReactState(initialState)

  useEffect(() => {
    if (options?.persist) {
      const { storage, key, customStorage } = options.persist

      const loadInitialState = async () => {
        try {
          let storedValue: string | null = null

          switch (storage) {
            case 'localStorage':
              storedValue = localStorage.getItem(key)
              break

            case 'sessionStorage':
              storedValue = sessionStorage.getItem(key)
              break

            case 'cookies': {
              const cookiesValue = document.cookie.split('; ').find(row => row.startsWith(`${key}=`))?.split('=')[1]
              storedValue = cookiesValue
                ? decodeURIComponent(cookiesValue)
                : null
              break
            }

            case 'customStorage':
              if (customStorage?.getItem) {
                storedValue = await customStorage.getItem(key)
              }
              break
          }

          if (storedValue !== null) {
            setState(JSON.parse(storedValue) as T)
          }
        } catch (error) {
          console.error('Error loading initial state:', error)
        }
      }

      loadInitialState()
    }
  }, [options?.persist])

  const persistState = (newState: SetStateAction<T>) => {
    setState((prevState) => {
      const stateToPersist = typeof newState === 'function'
        ? (newState as (prev: T) => T)(prevState)
        : newState

      if (options?.persist) {
        const { storage, key, customStorage } = options.persist

        try {
          switch (storage) {
            case 'localStorage':
              localStorage.setItem(key, JSON.stringify(stateToPersist))
              break

            case 'sessionStorage':
              sessionStorage.setItem(key, JSON.stringify(stateToPersist))
              break

            case 'cookies':
              document.cookie = `${key}=${encodeURIComponent(JSON.stringify(stateToPersist))}; path=/`
              break

            case 'customStorage':
              if (customStorage?.setItem) {
                customStorage.setItem(key, JSON.stringify(stateToPersist))
              }
              break
          }
        } catch (error) {
          console.error('Error persisting state:', error)
        }
      }
      return stateToPersist
    })
  }

  return [state, persistState]
}
