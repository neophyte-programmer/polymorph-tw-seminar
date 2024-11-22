import { people } from "./lib/data";

function App() {

  return (
    <main>
      {/* USE CASES - first, last, even, odd */}
      <h1 className="text-2xl font-bold text-center">People List</h1>
      <div className="space-y-8 container mx-auto  gap-12">
        {/* Section for `first` and `last` */}
        <h2 className="text-xl font-semibold">`first` and `last` Use Case</h2>
        <div className="space-y-4 grid grid-cols-2 gap-12">

          {/* Without Tailwind's utility classes */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Without Tailwind Classes</h3>
            <ul>
              {people.map((person, index) => (
                <li
                  key={person.id}
                  className={`
                  ${index === 0 ? "bg-green-100" : ""} 
                  ${index === people.length - 1 ? "bg-blue-100" : ""}
                `}
                >
                  <div className="p-4">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <p>{person.name} - {person.position}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* With Tailwind's `first` and `last` */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">With Tailwind Classes</h3>
            <ul>
              {people.map((person) => (
                <li
                  key={person.id}
                  className="p-4 "
                >
                  <div>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <p>{person.name} - {person.position}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section for `even` and `odd` */}
        <h2 className="text-xl font-semibold">`even` and `odd` Use Case</h2>
        <div className="space-y-4 grid grid-cols-2 gap-12">

          {/* Without Tailwind's utility classes */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Without Tailwind Classes</h3>
            <ul>
              {people.map((person, index) => (
                <li
                  key={person.id}
                  className={`
                  ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                `}
                >
                  <div className="p-4">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <p>{person.name} - {person.position}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* With Tailwind's `even` and `odd` */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">With Tailwind Classes</h3>
            <ul>
              {people.map((person) => (
                <li
                  key={person.id}
                  className="p-4 "
                >
                  <div>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <p>{person.name} - {person.position}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
