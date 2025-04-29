import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const InputField = ({ label, name, required, value, onChange, placeholder, type = "text", className }) => {
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
                className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent ${className}`} // Added className
                placeholder={placeholder}
            />
        </div>
    );
};

export const SelectField = ({ label, name, required, value, onChange, options, className }) => {
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
                    className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent appearance-none cursor-pointer ${className}`} // Added className
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

export const TextAreaField = ({ label, name, value, onChange, placeholder, rows = 4, className }) => {
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
                className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent ${className}`} // Added className
                placeholder={placeholder}
            ></textarea>
        </div>
    );
};

export const FileUploadField = ({ label, name, onChange, className }) => {
    const fileInputRef = useRef(null);
    const [uploadProgress, setUploadProgress] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);
    const [files, setFiles] = useState(null);

    const handleFileSelect = (event) => {
        const newFiles = event.target.files;
        setFiles(newFiles);
        if (newFiles && newFiles.length > 0) {
            setFileName(newFiles[0].name);
            setUploadProgress(0);
            setIsUploaded(false);

            // Simulate upload progress
            const interval = setInterval(() => {
                setUploadProgress((prevProgress) => {
                    if (prevProgress === null) return 0;
                    const newProgress = prevProgress + 10;
                    if (newProgress >= 100) {
                        clearInterval(interval);
                        setIsUploaded(true);
                        onChange(newFiles);
                        return 100;
                    }
                    return newProgress;
                });
            }, 100);

            setTimeout(() => {
                setUploadProgress(null);
                setFileName(null);
                setIsUploaded(false);
            }, 5000);
        }
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ${className}`}>
                <div className="space-y-1 text-center">
                    <CloudUploadIcon
                        fontSize='large'
                        className="text-gray-400 text-3xl mb-3 cursor-pointer hover:text-darkBlue"
                        onClick={() => fileInputRef.current?.click()}
                    />
                    <div className="flex text-sm text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-[#000028] hover:text-[#FFD700] focus-within:outline-none"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <span>Upload a file</span>
                            <input
                                id="file-upload"
                                name={name}
                                type="file"
                                multiple
                                className="sr-only"
                                onChange={handleFileSelect}
                                ref={fileInputRef}
                            />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                        PNG, JPG, PDF up to 10MB
                    </p>
                </div>
            </div>
            <AnimatePresence>
                {uploadProgress !== null && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                    >
                        <div className="bg-gray-200 rounded-full h-2.5">
                            <motion.div
                                className={`bg-[#FFD700] h-2.5 rounded-full`}
                                initial={{ width: '0%' }}
                                animate={{ width: `${uploadProgress}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            {uploadProgress < 100
                                ? `Uploading ${fileName}... ${uploadProgress}%`
                                : isUploaded
                                    ? `Uploaded ${fileName} successfully!`
                                    : 'Upload complete'
                            }
                        </p>
                        {isUploaded && (
                            <div className="flex items-center gap-2 mt-2">
                                <CheckCircleIcon className="text-green-500" size={16} />
                                <span className="text-green-500 text-sm">File uploaded</span>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const RadioGroupField = ({ label, name, options, value, onChange, className }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
                {label} <span className="text-red-500">*</span>
            </label>
            <div className={`grid md:grid-cols-2 gap-4 ${className}`}>
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
