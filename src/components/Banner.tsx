import { useModalStore } from "../hooks/use-modal-store"

const Banner = () => {
    const { updateShowModal } = useModalStore()

    return (
        <main className="mt-[100px] container relative mx-auto p-4">
            <div className="flex flex-col justify-center items-center gap-4 bg-purplishBlue p-[64px_0px] rounded-[16px]">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-center font-bold text-[2.5rem] leading-[77.45px] md:text-[3rem] lg:text-[4rem]">Join Our <span className="text-lightDarkishBlue">Waitlist</span></h1>
                    <p className="w-full text-[0.9rem] leading-[22px] text-gray-900 text-center md:w-[467.51px]">Join our waitlist to get first-hand from us when we launch our MVP in one month’s time</p>
                </div>
                <button onClick={() => {
                    const element = document.getElementById('hero')
                    element?.scrollTo({
                        behavior: 'smooth',
                    });
                    updateShowModal(true)
                }} className="py-[8px] px-[16px] rounded-[32px] bg-lightDarkishBlue text-sm text-white md:mt-[20px] md:text-base">Join Our Waitlist</button>
            </div>
        </main>
    )
}

export default Banner