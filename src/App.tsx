import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Features from "./components/Features"
import GettingStarted from "./components/GettingStarted"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import WaitingListModal from "./components/WaitingListModal"
import { useModalStore } from "./hooks/use-modal-store"

function App() {
  const { updateShowModal, showModal } = useModalStore()

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Features />
      <GettingStarted />
      <Banner />
      <Contact />

      {showModal && <WaitingListModal />}

      {showModal && (
        <div onClick={() => updateShowModal(false)} className='fixed top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden bg-black/80 z-30'></div>
      )}
    </main>
  )
}

export default App;