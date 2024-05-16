"use client"

import NewAccountSheet from "@/features/accounts/components/new-account-sheet"

import { FC } from "react"
import { useMountedState } from "react-use"

interface SheetProviderProps {}

const SheetProvider: FC<SheetProviderProps> = ({}) => {
  const isMounted = useMountedState()
  if (!isMounted) return null

  return (
    <>
      <NewAccountSheet />
    </>
  )
}

export default SheetProvider
