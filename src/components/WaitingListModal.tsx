import ModalContainer from "./modal/ModalContainer"
import ModalHeader from "./modal/ModalHeader"
import ModalContent from "./modal/ModalContent"
import { useModalStore } from "../hooks/use-modal-store"
import { Icon } from "@iconify/react/dist/iconify.js"
import { countries } from "../helpers/countries"
import axios, { AxiosError } from "axios";
import JSConfetti from "js-confetti";
import { SyntheticEvent, useState } from "react"

const WaitingListModal = () => {
    const { updateShowModal } = useModalStore()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [notAddedToList, setNotAddedToList] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    async function joinWaitingList(e: SyntheticEvent) {
        e.preventDefault()
        setIsLoading(true)
        const confetti = new JSConfetti()
        try {
            const response = await axios.post('https://waiting-list-drab.vercel.app/api/waiting-list', {
                name,
                email,
                country
            })

            if(response.status === 201) {
                setNotAddedToList(false)
                confetti.addConfetti()
            }

            
        } catch (error) {
            if(error instanceof AxiosError) {
                console.log(error)
            }
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

  return (
    <div className="relative container mx-auto p-4">
        {notAddedToList ? (
            <ModalContainer>
                <Icon className="absolute top-10 right-10 cursor-pointer" onClick={() => updateShowModal(false)} icon={'fa:close'} color="#8F9191" fontSize={23} />
                <ModalHeader>
                    <h2 className="text-center font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem]">Join Our <span className="text-lightDarkishBlue">Waitlist</span></h2>
                    <p className="text-center leading-[22px] text-[0.9rem] md:w-[464.26px]">Join our waitlist to get first-hand from us when we launch our MVP in one month’s time</p>
                </ModalHeader>
                <ModalContent>
                    <form onSubmit={joinWaitingList} className="flex flex-col gap-4">
                        <div className="grid gap-2">
                            <label className="font-semibold text-[0.9rem] md:text-[1rem]">First Name</label>
                            <input className="p-[10px_16px] w-full rounded-[8px] border border-grey text-[0.9rem] text-gray-600" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Input Your First Name"/>
                        </div>

                        <div className="grid gap-2">
                            <label className="font-semibold text-[0.9rem] md:text-[1rem]">Email</label>
                            <input type="text" className="p-[10px_16px] w-full rounded-[8px] border border-grey text-[0.9rem] text-gray-600" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hello@lint.com"/>
                        </div>

                        <div className="grid gap-2">
                            <label className="font-semibold text-[0.9rem] md:text-[1rem]">Country/Region</label>
                            <div className="relative w-full">
                                <select value={country} onChange={(e) => setCountry(e.target.value)} className="block appearance-none p-[10px_16px] w-full rounded-[8px] border border-grey text-[0.9rem] ">
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

                        <button disabled={isLoading} type="submit" className="rounded-[8px] bg-lightDarkishBlue text-white p-[16px] w-full font-semibold text-[0.9rem] duration-200 transition-all flex gap-1 justify-center items-center hover:bg-[#4d52d1] md:text-[1rem]">
                            {isLoading && (
                                <Icon icon={'mynaui:spinner-one'} className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Join Waitlist
                        </button>
                    </form>
                </ModalContent>
            </ModalContainer>
        ) : (
            <ModalContainer>
                <Icon className="absolute top-10 right-10 cursor-pointer" onClick={() => updateShowModal(false)} icon={'fa:close'} color="#8F9191" fontSize={23} />
                <ModalHeader>
                    <h2 className="text-center font-bold text-[1rem] mb-3 md:text-[1.5rem] lg:text-[2rem]">You have successfully joined</h2>
                    <p className="text-center leading-[22px] text-[0.9rem] md:w-[464.26px]">Be ready to explore the collaborations and become better with LinT.</p>
                </ModalHeader>
                <div className="flex justify-center items-center m-3">
                    <Icon icon={'emojione:white-heavy-check-mark'} fontSize={30}/>
                </div>
            </ModalContainer>
        )}

    </div>
  )
}

export default WaitingListModal