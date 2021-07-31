import { useEffect } from 'react'

const useGetDocumentTitlePrice = () => {

  useEffect(() => {
    document.title = `DollSwap`
  })
}
export default useGetDocumentTitlePrice
