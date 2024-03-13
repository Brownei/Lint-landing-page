import { PropsWithChildren } from "react"

const ModalContent = ({children}: PropsWithChildren) => {
  return (
    <div className="w-full">
        {children}
    </div>
  )
}

export default ModalContent