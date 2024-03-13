import { PropsWithChildren } from "react"

const ModalContainer = ({ children } : PropsWithChildren) => {
    return (
        <div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white box-border rounded-[10px] z-50 duration-500 ease-linear p-[32px_24px] transition-transform md:w-[696px]">
            {children}
        </div>
        </div>
    )
}

export default ModalContainer