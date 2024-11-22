import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        email: "",
        age: "",
        terms: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <main className="min-h-screen flex flex-col gap-12 p-8">
            <h1 className="text-2xl font-bold text-center">Form State Use Cases</h1>

            <div className="space-y-8 container mx-auto">
                {/* Required State */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">`required` State</h2>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        className="border p-2 required:border-red-500 required:bg-red-50"
                        required
                    />
                    <p className="text-sm text-gray-600">The input border turns red if required and left empty.</p>
                </section>

                {/* Valid and Invalid States */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">`valid` and `invalid` States</h2>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter a valid email"
                        className="border p-2 invalid:border-red-500 valid:border-green-500"
                    />
                    <p className="text-sm text-gray-600">The input border changes to red if invalid or green if valid.</p>
                </section>

                {/* In-range and Out-of-range States */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">`in-range` and `out-of-range` States</h2>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter your age (18-65)"
                        className="border p-2 in-range:border-green-500 out-of-range:border-red-500"
                        min="18"
                        max="65"
                    />
                    <p className="text-sm text-gray-600">
                        The input border turns green if within range and red if out of range.
                    </p>
                </section>

                {/* Autofill State */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">`autofill` State</h2>
                    <input
                        type="text"
                        name="email"
                        placeholder="Autofill your email"
                        className="border p-2 autofill:bg-blue-50"
                        autoComplete="email"
                    />
                    <p className="text-sm text-gray-600">The background color changes when autofilled by the browser.</p>
                </section>

                {/* Indeterminate State */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">`indeterminate` State</h2>
                    <IndeterminateCheckbox />
                    <p className="text-sm text-gray-600">
                        The checkbox appears in an indeterminate state when neither checked nor unchecked.
                    </p>
                </section>
            </div>
        </main>
    );
}

// Component for Indeterminate Checkbox
const IndeterminateCheckbox = () => {
    const ref = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = true; // Set indeterminate state programmatically
        }
    }, []);

    return (
        <label className="flex items-center space-x-2">
            <input
                type="checkbox"
                ref={ref}
                className="w-4 h-4 text-blue-600 border-gray-300 indeterminate:bg-yellow-300"
            />
            <span>Terms and Conditions</span>
        </label>
    );
};

export default Form;
