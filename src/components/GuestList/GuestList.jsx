import { useState } from 'react';
import AddGroup from './AddGroup';
import AddGuest from './AddGuest';
import AddEvent from './AddEvent';
import List from './List';


// data will look like this
const data = [
  {
    id: 1,
    title: 'friends',
    guests: [
      {
        id: 1,
        name: 'ABC',
        events: ["mehendi", "haldi", "marriage", "reception"],
        phone: 946464,
        email: 'abc@gmail.com',
      },
      {
        id: 2,
        name: 'ASD',
        events: ["mehendi", "marriage"],
        phone: 78456,
        email: 'asd@gmail.com',
      },
      {
        id: 3,
        name: 'John Doe',
        events: ["mehendi", "sangeet", "wedding", "reception", "anniversary"],
        phone: 985672,
        email: 'john.doe@gmail.com',
      },
      {
        id: 4,
        name: 'Jane Smith',
        events: ["mehendi", "wedding", "reception", "sangeet", "party"],
        phone: 853612,
        email: 'jane.smith@gmail.com',
      },
      {
        id: 5,
        name: 'Michael Johnson',
        events: ["wedding", "reception", "mehendi"],
        phone: 743563,
        email: 'michael.johnson@gmail.com',
      },
      {
        id: 6,
        name: 'Emily Davis',
        events: ["haldi", "marriage", "mehendi", "reception"],
        phone: 988453,
        email: 'emily.davis@gmail.com',
      },
      {
        id: 7,
        name: 'Chris Lee',
        events: ["mehendi", "wedding", "reception"],
        phone: 775543,
        email: 'chris.lee@gmail.com',
      },
      {
        id: 8,
        name: 'Sophia Williams',
        events: ["mehendi", "sangeet", "marriage"],
        phone: 985634,
        email: 'sophia.williams@gmail.com',
      },
    ],
  },
  {
    id: 2,
    title: 'family',
    guests: [
      {
        id: 1,
        name: 'Nani',
        events: ["mehendi", "haldi"],
        phone: 12345,
        email: 'nani@gmail.com',
      },
      {
        id: 2,
        name: 'Masi',
        events: ["mehendi", "marriage"],
        phone: 456125,
        email: 'masi@gmail.com',
      },
      {
        id: 3,
        name: 'Aunt Ruby',
        events: ["mehendi", "wedding", "reception"],
        phone: 888766,
        email: 'ruby.aunt@gmail.com',
      },
      {
        id: 4,
        name: 'Uncle Raj',
        events: ["mehendi", "sangeet", "wedding", "reception"],
        phone: 765432,
        email: 'raj.uncle@gmail.com',
      },
      {
        id: 5,
        name: 'Grandpa John',
        events: ["mehendi", "marriage"],
        phone: 923847,
        email: 'grandpa.john@gmail.com',
      },
      {
        id: 6,
        name: 'Grandma Sophia',
        events: ["mehendi", "sangeet"],
        phone: 765483,
        email: 'grandma.sophia@gmail.com',
      },
      {
        id: 7,
        name: 'Brother Tim',
        events: ["wedding", "reception", "mehendi"],
        phone: 982356,
        email: 'brother.tim@gmail.com',
      },
      {
        id: 8,
        name: 'Sister Lily',
        events: ["wedding", "sangeet", "mehendi"],
        phone: 654321,
        email: 'sister.lily@gmail.com',
      },
    ],
  },
  {
    id: 3,
    title: 'colleagues',
    guests: [
      {
        id: 1,
        name: 'Rachel Green',
        events: ["sangeet", "marriage", "reception"],
        phone: 903472,
        email: 'rachel.green@gmail.com',
      },
      {
        id: 2,
        name: 'Monica Geller',
        events: ["mehendi", "sangeet", "reception"],
        phone: 873465,
        email: 'monica.geller@gmail.com',
      },
      {
        id: 3,
        name: 'Phoebe Buffay',
        events: ["wedding", "mehendi", "sangeet"],
        phone: 783219,
        email: 'phoebe.buffay@gmail.com',
      },
      {
        id: 4,
        name: 'Chandler Bing',
        events: ["sangeet", "marriage", "reception"],
        phone: 789654,
        email: 'chandler.bing@gmail.com',
      },
      {
        id: 5,
        name: 'Joey Tribbiani',
        events: ["mehendi", "sangeet", "wedding"],
        phone: 786543,
        email: 'joey.tribbiani@gmail.com',
      },
      {
        id: 6,
        name: 'Ross Geller',
        events: ["marriage", "reception"],
        phone: 543210,
        email: 'ross.geller@gmail.com',
      },
      {
        id: 7,
        name: 'Janice Hosenstein',
        events: ["mehendi", "wedding"],
        phone: 983746,
        email: 'janice.hosenstein@gmail.com',
      },
      {
        id: 8,
        name: 'Gunther',
        events: ["reception", "sangeet"],
        phone: 983456,
        email: 'gunther@gmail.com',
      },
    ],
  },
  {
    id: 4,
    title: 'neighbors',
    guests: [
      {
        id: 1,
        name: 'Tom Hardy',
        events: ["wedding", "reception", "mehendi"],
        phone: 567890,
        email: 'tom.hardy@gmail.com',
      },
      {
        id: 2,
        name: 'Christian Bale',
        events: ["mehendi", "sangeet", "wedding"],
        phone: 678901,
        email: 'christian.bale@gmail.com',
      },
      {
        id: 3,
        name: 'Matt Damon',
        events: ["marriage", "reception"],
        phone: 789012,
        email: 'matt.damon@gmail.com',
      },
      {
        id: 4,
        name: 'Cate Blanchett',
        events: ["mehendi", "sangeet", "wedding"],
        phone: 890123,
        email: 'cate.blanchett@gmail.com',
      },
      {
        id: 5,
        name: 'Benedict Cumberbatch',
        events: ["wedding", "reception", "mehendi", "sangeet"],
        phone: 901234,
        email: 'benedict.cumberbatch@gmail.com',
      },
      {
        id: 6,
        name: 'Keira Knightley',
        events: ["mehendi", "reception", "wedding"],
        phone: 123456,
        email: 'keira.knightley@gmail.com',
      },
      {
        id: 7,
        name: 'Tom Hanks',
        events: ["reception", "wedding", "sangeet"],
        phone: 234567,
        email: 'tom.hanks@gmail.com',
      },
      {
        id: 8,
        name: 'Meryl Streep',
        events: ["sangeet", "mehendi"],
        phone: 345678,
        email: 'meryl.streep@gmail.com',
      },
    ],
  },
];


const GuestList = () => {
  const events = [
    {
      id: 1,
      event: 'mehendi',
      checked: false
    },
    {
      id: 2,
      event: 'haldi',
      checked: false
    },
    {
      id: 3,
      event: 'pujan',
      checked: false
    },
    {
      id: 4,
      event: 'marriage',
      checked: false
    },

  ];
  const [isGroupOpen, setIsGroupOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [eventName, setEventName] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [list, setList] = useState(events);
  
  const group = [];
  // const handleAddGroup = ()=>{
    
  // }
  return (
    <>
      <div className="container">
        <div className='buttonContainer  gap-4 flex'>

          {/* Button to add groups */}
          <button className="button border-2 border-gray-500 p-2.5 px-6 text-base bg-gray-200 rounded-full transition-all duration-2000 ease-in-out" onClick={()=>setIsGroupOpen(true)}>
            Add Group
          </button>

          {/* Button to add guest */}
          <button className="button border-2 border-gray-500 p-2.5 px-6 text-base bg-gray-200 rounded-full transition-all duration-2000 ease-in-out" onClick={() => setIsGuestOpen(true)}>
            Add Guest
          </button>

          {/* Button to add events */}
          <button className="button border-2 border-gray-500 p-2.5 px-6 text-base bg-gray-200 rounded-full transition-all duration-2000 ease-in-out" onClick={() => setIsEventOpen(true)}>
            Add Event
          </button>
        </div>
        {/* Modals */}
        {
          isGroupOpen && <AddGroup setIsGroupOpen={setIsGroupOpen} setGroupName={setGroupName}/>
        }
        
        {
          isGuestOpen && <AddGuest list={list} setList={setList} setIsGuestOpen={setIsGuestOpen} data={data}/>
        }
        
        {
          isEventOpen && <AddEvent setIsEventOpen={setIsEventOpen} setEventName={setEventName}/>
        }
        {/* List */}
        <List data={data}/>
      </div>
    </>
  )
};



export default GuestList;
