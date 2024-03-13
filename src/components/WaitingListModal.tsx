import ModalContainer from "./modal/ModalContainer"
import ModalHeader from "./modal/ModalHeader"
import ModalContent from "./modal/ModalContent"
import { useModalStore } from "../hooks/use-modal-store"
import { Icon } from "@iconify/react/dist/iconify.js"
import { countries } from "../helpers/countries"

const WaitingListModal = () => {
    const { updateShowModal } = useModalStore()

  return (
    <ModalContainer>
        <Icon className="absolute top-10 right-10 cursor-pointer" onClick={() => updateShowModal(false)} icon={'fa:close'} color="#8F9191" fontSize={23} />
        <ModalHeader>
            <h2 className="text-center font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem]">Join Our <span className="text-lightDarkishBlue">Waitlist</span></h2>
            <p className="text-center leading-[22px] text-[0.9rem] md:w-[464.26px]">Join our waitlist to get first-hand from us when we launch our MVP in one month’s time</p>
        </ModalHeader>
        <ModalContent>
            <form className="flex flex-col gap-4">
                <div className="grid gap-2">
                    <label className="font-semibold text-[0.9rem] md:text-[1rem]">First Name</label>
                    <input className="p-[10px_16px] w-full rounded-[8px] border border-grey text-[0.9rem] text-gray-600" type="text" placeholder="Input Your First Name"/>
                </div>

                <div className="grid gap-2">
                    <label className="font-semibold text-[0.9rem] md:text-[1rem]">Email</label>
                    <input type="text" className="p-[10px_16px] w-full rounded-[8px] border border-grey text-[0.9rem] text-gray-600" placeholder="hello@lint.com"/>
                </div>

                <div className="grid gap-2">
                    <label className="font-semibold text-[0.9rem] md:text-[1rem]">Country/Region</label>
                    <div className="relative w-full">
                        <select className="block appearance-none p-[10px_16px] w-full rounded-[8px] border border-grey text-[0.9rem]">
                            <option value="">Select</option>
                            {countries.map((country, index) => (
                                <option value={country.name.common} key={index}>{country.name.common}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
                            <Icon icon={'solar:alt-arrow-down-linear'} fontSize={20} fontWeight={700}/>
                        </div>
                    </div>
                </div>

                <button onClick={() => console.log('Hello!')} className="rounded-[8px] bg-lightDarkishBlue text-white p-[16px] w-full font-semibold text-[0.9rem] md:text-[1rem]">Join Waitlist</button>
            </form>
        </ModalContent>
    </ModalContainer>
  )
}

export default WaitingListModal