import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
    const formik = useFormik({
        initialValues: {
            email: "",
            age: "",
            terms: false,
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email format").required("Email is required"),
            age: Yup.number()
                .min(18, "Age must be at least 18")
                .max(65, "Age must be at most 65")
                .required("Age is required"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <main className="min-h-screen flex flex-col gap-12 p-8">
            <h1 className="text-2xl font-bold text-center">Form State Use Cases</h1>

            <form
                onSubmit={formik.handleSubmit}
                className="space-y-8 container mx-auto"
            >
                {/* Required State */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">`required` State</h2>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`border p-2 ${formik.errors.email && formik.touched.email
                                ? "border-danger bg-danger-light"
                                : "border-gray-light"
                            }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-danger text-sm">{formik.errors.email}</p>
                    )}
                    <p className="text-sm text-gray-600">
                        The input border turns red if required and left empty.
                    </p>
                </section>

                {/* Valid and Invalid States */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">`valid` and `invalid` States</h2>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter a valid email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`border p-2 ${formik.errors.email && formik.touched.email
                                ? "border-danger"
                                : formik.touched.email
                                    ? "border-success"
                                    : "border-gray-light"
                            }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-danger text-sm">{formik.errors.email}</p>
                    )}
                    <p className="text-sm text-gray-600">
                        The input border changes to red if invalid or green if valid.
                    </p>
                </section>

                {/* In-range and Out-of-range States */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">`in-range` and `out-of-range` States</h2>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your age (18-65)"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                        className={`border p-2 ${formik.errors.age && formik.touched.age
                                ? "border-danger"
                                : formik.touched.age
                                    ? "border-success"
                                    : "border-gray-light"
                            }`}
                        min="18"
                        max="65"
                    />
                    {formik.touched.age && formik.errors.age && (
                        <p className="text-danger text-sm">{formik.errors.age}</p>
                    )}
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
                        className="border p-2 autofill:bg-info"
                        autoComplete="email"
                    />
                    <p className="text-sm text-gray-600">
                        The background color changes when autofilled by the browser.
                    </p>
                </section>

                {/* Indeterminate State */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">`indeterminate` State</h2>
                    <IndeterminateCheckbox />
                    <p className="text-sm text-gray-600">
                        The checkbox appears in an indeterminate state when neither checked
                        nor unchecked.
                    </p>
                </section>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </main>
    );
}

// Component for Indeterminate Checkbox
const IndeterminateCheckbox = () => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = true; // Set indeterminate state programmatically
        }
    }, []);

    return (
        <label className="flex items-center space-x-2">
            <input
                type="checkbox"
                ref={ref}
                className="w-4 h-4 text-blue-600 border-gray-light indeterminate:bg-warning"
            />
            <span>Terms and Conditions</span>
        </label>
    );
};

export default App;
