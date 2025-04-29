

export const InputField = ({ label, name, required, value, onChange, placeholder, type = "text" }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder={placeholder}
            />
        </div>
    );
};

export const SelectField = ({ label, name, required, value, onChange, options }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <select
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent appearance-none cursor-pointer"
                >
                    <option value="">{`Select ${label}`}</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                </div>
            </div>
        </div>
    );
};


export const TextAreaField = ({ label, name, value, onChange, placeholder, rows = 4 }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder={placeholder}
            ></textarea>
        </div>
    );
};

export const FileUploadField = ({ label, name, onChange }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mb-3"></i>
                    <div className="flex text-sm text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-[#000028] hover:text-[#FFD700] focus-within:outline-none"
                        >
                            <span>Upload a file</span>
                            <input
                                id="file-upload"
                                name={name}
                                type="file"
                                multiple
                                className="sr-only"
                                onChange={onChange}
                            />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                        PNG, JPG, PDF up to 10MB
                    </p>
                </div>
            </div>
        </div>
    );
};


export const RadioGroupField = ({ label, name, options, value, onChange }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
                {label} <span className="text-red-500">*</span>
            </label>
            <div className="grid md:grid-cols-2 gap-4">
                {options.map((option) => (
                    <div key={option} className="flex items-center">
                        <input
                            type="radio"
                            id={option}
                            name={name}
                            value={option}
                            checked={value === option}
                            onChange={onChange}
                            className="h-4 w-4 text-[#FFD700] focus:ring-[#FFD700] border-gray-300"
                        />
                        <label htmlFor={option} className="ml-3 text-sm text-gray-700">
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};