import { PropsWithChildren } from "react"

const ModalHeader = ({children}: PropsWithChildren) => {
  return (
    <header className="w-full py-[0px] px-[24px] box-border flex flex-col justify-center items-center mt-[28px]">
        {children}
    </header>
  )
}

export default ModalHeader