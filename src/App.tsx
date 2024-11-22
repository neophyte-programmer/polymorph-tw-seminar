import Form from "./components/form";
import { people } from "./lib/data";

function App() {
  return (
    <main className="min-h-screen flex flex-col gap-12 p-8">

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
                  ${index === 0 ? "bg-success" : ""} 
                  ${index === people.length - 1 ? "bg-info" : ""}
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
                  className="p-4 first:bg-success last:bg-info"
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
                  ${index % 2 === 0 ? "bg-gray-light" : "bg-gray"}
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
                  className="p-4 even:bg-gray-light odd:bg-gray"
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

      <Form />


      <div>
        <h1 className="text-2xl font-bold text-center">Arbitrary Poperties Use Case</h1>
        <div className="grid grid-cols-2 gap-12">
          <section className="space-y-4 text-center">
            <h2 className="text-xl font-semibold">With `style` Prop</h2>
            <div>
              {/* Static Background Gradient */}
              <div
                style={{
                  background: "linear-gradient(to right, #34d399, #3b82f6)",
                  width: "200px",
                  height: "100px",
                  borderRadius: "12px",
                }}
              >
                <p className="text-white">Static Gradient</p>
              </div>
              {/* Limited Modifiers Example */}
              <div
                className="mt-4"
                style={{
                  background: "linear-gradient(to right, #f87171, #facc15)",
                  width: "200px",
                  height: "100px",
                  borderRadius: "12px",
                  opacity: 0.5, // Can't easily add hover or responsive states
                }}
              >
                <p className="text-white">No hover or responsive control</p>
              </div>
            </div>
          </section>

          {/* Using Tailwind Arbitrary Properties */}
          <section className="space-y-4 text-center">
            <h2 className="text-xl font-semibold">With Tailwind Arbitrary Properties</h2>
            <div>
              {/* Static Background Gradient */}
              <div className="bg-[linear-gradient(to_right,_#34d399,_#3b82f6)] w-48 h-24 rounded-xl flex items-center justify-center">
                <p className="text-white">Static Gradient</p>
              </div>
              {/* Modifier Example: Hover */}
              <div className="mt-4 bg-[linear-gradient(to_right,_#f87171,_#facc15)] w-48 h-24 rounded-xl flex items-center justify-center hover:opacity-100 opacity-50">
                <p className="text-white">Hover for full opacity</p>
              </div>
              {/* Responsive Example */}
              <div className="mt-4 bg-[linear-gradient(to_right,_#8b5cf6,_#5b21b6)] w-48 h-24 rounded-xl flex items-center justify-center sm:bg-[linear-gradient(to_right,_#ec4899,_#be185d)]">
                <p className="text-white">Responsive Gradient</p>
              </div>
            </div>
          </section>


        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2>LINE CLAMP</h2>

          <section className="space-y-4 ">
            <h2 className="text-xl font-semibold">Line Clamp Example</h2>
            <ul>
              {people.map((person) => (
                <li key={person.id} className="flex flex-col items-center space-x-4 ">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Placeholder for image */}
                  <p className="line-clamp-1">{person.name}</p>
                  <p className="line-clamp-2 hover:line-clamp-none">{person.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Text Truncate</h2>
          <ul>
            {people.map((person) => (
              <li key={person.id} className="flex items-center space-x-4">
                <p className="truncate max-w-[200px]">{person.description}</p>
              </li>
            ))}
          </ul>
        </section>
        
        
      </div>
    </main>
  );
}

export default App;
