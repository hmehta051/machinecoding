import React, { useEffect, useState } from 'react'

const questions = [
  {
    id: 1,
    title: 'Do I have to allow the use of cookies?',
    info: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
  },
  {
    id: 2,
    title: 'How do I change my My Page password?',
    info: 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
  },
  {
    id: 3,
    title: 'What is BankID?',
    info: 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
  },
  {
    id: 4,
    title: 'Whose birth number can I use?',
    info: 'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
  },
  {
    id: 5,
    title: 'When do I recieve a password ordered by letter?',
    info: 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
  },
]

const AccordionMini = ({ data, handleSetId, trackAccord, mult }) => {
  const { title, info, id } = data
  const [show, setShow] = useState(false)

  const handleToggle = () => {
    handleSetId(id)
    setShow(p => !p)
  }

  useEffect(() => {
    if (trackAccord) {
      setShow(trackAccord === id)
    }
  }, [trackAccord])

  useEffect(() => {
    setShow(false)
  }, [mult])

  return (
    <div className="border border-gray-300 rounded-md shadow-sm mb-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <button
          className="text-xl font-bold text-gray-600 focus:outline-none border-2 border-black p-4"
          aria-label="Toggle accordion"
          onClick={handleToggle}
        >
          {show ? '-' : '+'}
        </button>
      </div>

      {/* Body */}
      {show && (
        <div className="p-4 bg-white text-gray-700 border-t border-gray-200 transition-all duration-200">
          {info}
        </div>
      )}
    </div>
  )
}
const Accordian = () => {
  const [trackAccord, setTrackAccord] = useState(0)
  const [mult, setMult] = useState(false)
  const handleSetId = (id = null) => {
    setTrackAccord(mult ? null : id)
  }
  return (
    <div>
      <h1>Accordian</h1>
      <label>Is Multiple Chcekbox allowed?</label>
      <input
        type="checkbox"
        name=""
        id=""
        value={mult}
        onChange={() => setMult(p => !p)}
      />
      {questions.map((data, index) => {
        return (
          <AccordionMini
            key={index}
            data={data}
            handleSetId={handleSetId}
            trackAccord={trackAccord}
            mult={mult}
          />
        )
      })}
    </div>
  )
}

export default Accordian
